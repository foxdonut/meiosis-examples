/* global __dirname */
"use strict";

const fs = require("fs");
const Path = require("path");
const domvm = require("domvm");

const Persistence = require("../persistence");
const createMain = require("../../build/generated-main").createMain;

const main = createMain();
const View = () => () => main.view(main.model());
const html = () => domvm.createView(View).html();

exports.root = function(request, reply) {
  fs.readFile(Path.join(__dirname, "../../public/index.html"), "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    const document = data.replace(/\r?\n */g, "").replace(/<div id="app"><\/div>/,
      '<div id="app">' + html() + '</div>');
    reply(document);
  });
};

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
