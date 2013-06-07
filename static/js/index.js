exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    var r = confirm("following this link will leak the pad url of this pad, are you sure you want to continue?");
    if(r){
      window.open(e.currentTarget.innerHTML, '_blank');
      e.preventDefault();
      return false;
    }else{
      e.preventDefault();
      return false;
    }
  });
}
