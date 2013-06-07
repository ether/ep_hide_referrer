exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    prompt(
      "Copy this link and paste it to the adress bar of some other browser tab\n(to prevent the browser from leaking this pad's confidential URL as a \"referer\").\nCtrl-C + Ctrl-T + Ctrl-V + Enter should do the trick on most browsers ;)",
      e.currentTarget.innerHTML
    );
    e.preventDefault();
    return false;
  });
}
