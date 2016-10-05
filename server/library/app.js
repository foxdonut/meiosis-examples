var Hapi = require("hapi");

var server = new Hapi.Server();

module.exports = {
  listen: function(port) {
    server.connection({ port: port });

    server.register(require("inert"), function(err) {
      if (err) {
        throw err;
      }
      server.route({
        method: "GET",
        path: "/{param*}",
        handler: {
          directory: {
            path: "."
          }
        }
      });
    });

    server.start(function(err) {
      if (err) {
        throw err;
      }
    });
  }
};
