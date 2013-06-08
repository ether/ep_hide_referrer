exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    console.log(e);
    prompt(
      "Copy this link and paste it to the adress bar of some other browser tab (to prevent the browser from leaking this pad's confidential URL as a \"referer\").",
      e.originalEvent.srcElement.href
    );
    e.preventDefault();
    return false;
  });
}
