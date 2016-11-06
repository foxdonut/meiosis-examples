import * as Hapi from "hapi";
const inert = require("inert");
import * as fs from "fs";
import { Database } from "sql.js";

import { addBookRoutes } from "./book";

const server: Hapi.Server = new Hapi.Server();

function start(port: number): void {
  const fb: Buffer = fs.readFileSync("./library.db");
  const db: Database = new Database(fb);

  /*
  fs.writeFileSync("./library.db", new Buffer(db.export()));
  db.close();
  */

  server.connection({ port: port });

  function handler(variant: String): (request: Hapi.Request, reply: Hapi.IReply) => void {
    return function(request: Hapi.Request, reply: Hapi.IReply): void {
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
