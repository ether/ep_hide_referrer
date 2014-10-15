exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    window.open('../redirect#'+escape(e.currentTarget.href));
    e.preventDefault();
    return false;
  });

  $('#chattext > p').on('click', "a", function (e){
    window.open('../redirect#'+escape(e.currentTarget.href));
    e.preventDefault();
    return false;
  });
}

exports.postTimesliderInit = function(hook, context){
  $('#padcontent').on('click', "a", function (e){
    window.open('../../redirect#'+escape(e.currentTarget.href));
    e.preventDefault();
    return false;
  });
}
