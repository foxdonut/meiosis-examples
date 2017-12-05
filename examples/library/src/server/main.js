import * as Hapi from "hapi";
const inert = require("inert");
import * as fs from "fs";
import { Database } from "sql.js";

import { addBookRoutes } from "./book";

const server = new Hapi.Server();

function start(port) {
  const fb = fs.readFileSync("./library.db");
  const db = new Database(fb);

  /*
  fs.writeFileSync("./library.db", new Buffer(db.export()));
  db.close();
  */

  server.connection({ port: port });

  function handler(variant) {
    return function(request, reply) {
      try {
        const file = "./" + request.params["file"];
        fs.statSync(file);
        reply.file(file);
      }
      catch (err) {
        reply.file("./index-" + variant + ".html");
      }
    }
  }

  server.register(inert, function(err) {
    if (err) {
      throw err;
    }
    addBookRoutes(server, db);

    server.route({
      method: "GET",
      path: "/{file*}",
      handler: {
        directory: {
          path: "../.."
        }
      }
    });

    server.route({
      method: "GET",
      path: "/examples/library/react/{file*}",
      handler: handler("react")
    });

    server.route({
      method: "GET",
      path: "/examples/library/mithril/{file*}",
      handler: handler("mithril")
    });
  });

  server.start(function(err) {
    if (err) {
      throw err;
    }
  });
}

export { start };