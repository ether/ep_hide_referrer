exports.registerRoute = function (hook_name, args, callback) {
  args.app.get('/redirect', function(req, res) {
    res.send(
"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n  <title>External link</title>\n  <script type=\"text/javascript\">\n    window.redir_onload = function() {\n      var urlhash = location.hash.substr(1);\n      if (urlhash.search(':')<0) {\n        urlhash = unescape(urlhash);\n      }\n      if (urlhash.search(/^https?:\\/\\//) !== 0) {\n        urlhash = '';\n      }\n      var the_content = document.getElementById('content');\n      if (urlhash) {\n        the_content.innerHTML =\n          '<h4>Click to visit this exteral link</h4><h3><a href=\"'+urlhash+'\">'+urlhash+'</a></h3>';\n      } else {\n        the_content.innerHTML = '<h4>Nothing to see here. Move along</h4>';\n      }\n    };\n  </script>\n</head>\n<body onload=\"redir_onload()\">\n<div id=\"content\" style=\"text-align:center\">For the next trick, we'll need a volunteer with javascript enabled :)</div>\n</body>\n</html>"
    );
  });
}
