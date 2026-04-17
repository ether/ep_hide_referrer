![Publish Status](https://github.com/ether/ep_hide_referrer/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_hide_referrer/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_hide_referrer/actions/workflows/test-and-release.yml)

A patch to solve the [referrer leak issue](https://github.com/ether/etherpad-lite/issues/1603) (for applications where the pad id is should be confidential)

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_hide_referrer` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_hide_referrer
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
