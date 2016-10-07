import * as Hapi from "hapi";
const inert = require("inert");
import * as fs from "fs";
import { Database } from "sql.js";

import { addBookRoutes } from "./book";

const server: Hapi.Server = new Hapi.Server();

function start(port: number): void {
  const fb: Buffer = fs.readFileSync("../library.db");
  const db: Database = new Database(fb);

  server.connection({ port: port });

  server.register(inert, function(err) {
    if (err) {
      throw err;
    }
    addBookRoutes(server, db);

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

export { start };
