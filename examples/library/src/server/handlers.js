/* global __dirname */
"use strict";

const Path = require("path");
const Persistence = require("../persistence");

exports.staticFile = {
  directory: {
    path: Path.join(__dirname, "../../public")
  }
};

exports.findAllBooks = function(request, reply) {
  Persistence.findAllBooks(this.db, (err, rows) => {
    if (err) {
      throw err;
    }
    return reply(rows);
  });
};
