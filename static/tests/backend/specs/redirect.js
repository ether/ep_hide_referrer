'use strict';

const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');
const common = require('ep_etherpad-lite/tests/backend/common');

let agent;

describe(__filename, function () {
  before(async function () {
    agent = await common.init();
  });

  describe('GET /redirect', function () {
    it('serves the redirect template (regression for #80: no double-decode)', async function () {
      const res = await agent.get('/redirect').expect(200).expect('Content-Type', /html/);
      const html = res.text;
      // The fix removes unescape() and decodes exactly once. If somebody
      // re-introduces unescape() or a second decodeURIComponent(), we want
      // the test to fail before users hit broken Google Maps Plus Code URLs
      // again.
      assert(!/\bunescape\s*\(/.test(html), 'redirect template must not use unescape()');
      const decodeCount = (html.match(/decodeURIComponent\s*\(/g) || []).length;
      assert.equal(decodeCount, 1,
          `redirect template must call decodeURIComponent exactly once (found ${decodeCount})`);
    });
  });

  describe('encode/decode round-trip', function () {
    // The plugin's static/js/index.js wraps the target href with
    // encodeURIComponent and the redirect template decodes once. This test
    // pins down the property the fix relies on: round-tripping must be
    // lossless for URLs containing percent-encoded characters that would
    // otherwise be reinterpreted by a second decode pass.
    const cases = [
      // Issue #80 — Google Maps Plus Code (the original bug report).
      'https://www.google.com/maps/place/G98H%2BG38%20Berlin%2C%20Deutschland',
      // Common URL forms with reserved chars.
      'https://example.com/path?q=a%20b&x=1%2B2',
      'https://example.com/path/with%2Fslash',
      'mailto:user@example.com?subject=Hello%20World',
    ];
    for (const url of cases) {
      it(`preserves: ${url}`, function () {
        const round = decodeURIComponent(encodeURIComponent(url));
        assert.equal(round, url);
      });
    }
  });
});
