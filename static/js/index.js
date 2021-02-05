'use strict';

exports.postAceInit = (hook, context) => {
  const $inner =
      $('iframe[name="ace_outer"]').contents().find('iframe').contents().find('#innerdocbody');
  $inner.on('click', 'a', (e) => {
    window.open(`../redirect#${escape(e.currentTarget.href)}`);
    e.preventDefault();
    return false;
  });

  $inner.on('contextmenu', 'a', function (e) {
    $(this).attr('href', `../redirect#${escape(e.currentTarget.href)}`);
  });

  $('#chattext').on('click', 'a', function (e) {
    if ($(this).hasClass('no-referrer')) {
      window.open(e.currentTarget.href);
    } else {
      window.open(`../redirect#${escape(e.currentTarget.href)}`);
    }
    e.preventDefault();
    return false;
  });

  $('#chattext').on('contextmenu', 'a', function (e) {
    if (!$(this).hasClass('no-referrer')) {
      $(this).attr('rel', 'noreferrer');
      $(this).addClass('no-referrer');
      $(this).attr('href', `../redirect#${escape(e.currentTarget.href)}`);
    }
  });
};

exports.postTimesliderInit = (hook, context) => {
  $('#padcontent').on('click', 'a', (e) => {
    window.open(`../../redirect#${escape(e.currentTarget.href)}`);
    e.preventDefault();
    return false;
  });

  $('#padcontent').on('contextmenu', 'a', function (e) {
    $(this).attr('rel', 'noreferrer');
  });
};
