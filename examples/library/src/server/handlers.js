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

const OPERATIONS = [
  "Add to library",
  "Check out",
  "Return",
  "Take out of circulation"
];

exports.findAllOperations = function(request, reply) {
  return reply(OPERATIONS);
};

const PROBLEMS = [
  { isbn: "1-86092-030-6", type: "WARNING", description: "Moderately damaged" },
  { isbn: "1-86092-002-0", type: "ERROR", description: "Missing pages" },
  { isbn: "1-86092-020-9", type: "ERROR", description: "Torn cover and pages" },
  { isbn: "1-86092-016-0", type: "WARNING", description: "Some pages are stained" }
];

exports.findAllProblems = function(request, reply) {
  return reply(PROBLEMS);
};
