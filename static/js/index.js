exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    window.open('../redirect#'+escape(e.currentTarget.href));
    e.preventDefault();
    return false;
  });

  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('contextmenu', "a", function (e){
    $(this).attr('href','../redirect#'+escape(e.currentTarget.href));
  });

  $('#chattext').on('click', "a", function (e){
    if ( $(this).hasClass('no-referrer') ) {
        window.open(e.currentTarget.href);
    } else {
        window.open('../redirect#'+escape(e.currentTarget.href));
    }
    e.preventDefault();
    return false;
  });

  $('#chattext').on('contextmenu', "a", function (e){
    if ( !$(this).hasClass('no-referrer') ) {
       $(this).attr('rel','noreferrer');
       $(this).addClass('no-referrer');
       $(this).attr('href','../redirect#'+escape(e.currentTarget.href));
    }
  });

}

exports.postTimesliderInit = function(hook, context){
  $('#padcontent').on('click', "a", function (e){
    window.open('../../redirect#'+escape(e.currentTarget.href));
    e.preventDefault();
    return false;
  });

  $('#padcontent').on('contextmenu', 'a', function (e){
    $(this).attr('rel','noreferrer');
  });

}
