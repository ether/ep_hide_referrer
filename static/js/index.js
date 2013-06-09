exports.postAceInit = function(hook, context){
  $('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").on('click', "a", function (e){
    window.open('/redirect');
    createCookie("url", e.originalEvent.srcElement.href);
    e.preventDefault();
    return false;
  });
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
   else var expires = "";
   document.cookie = name+"="+value+expires+"; path=/";
}

