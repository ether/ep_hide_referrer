var path = require("path");
var eejs = require('ep_etherpad-lite/node/eejs');

exports.registerRoute = function (hook_name, args, callback) {
  args.app.get('/redirect', function(req, res) {
    console.log(__dirname);
    res.send(eejs.require(__dirname + "/templates/redirect.html"));
  });
}
