/* global __dirname */
"use strict";

const fs = require("fs");
const Path = require("path");
const domvm = require("domvm");
const { html, json } = require("paperplane");
const Sqlite3 = require("sqlite3")

const Persistence = require("../persistence");
const createMain = require("../../build/generated-main").createMain;
const db = new Sqlite3.Database("./library.db")

const main = createMain();
const View = () => () => main.view(main.model());
const appHtml = () => domvm.createView(View).html();

exports.root = function() {
  return new Promise((resolve, reject) => {
    fs.readFile(Path.join(__dirname, "../../public/index.html"), "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      const document = data.replace(/\r?\n */g, "").replace(/<div id="app"><\/div>/,
        '<div id="app">' + appHtml() + '</div>');
      resolve(html(document));
    });
  });
};

exports.findAllBooks = function() {
  return new Promise((resolve, reject) => {
    Persistence.findAllBooks(db, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(json(rows));
    });
  });
};

const OPERATIONS = [
  "Check out",
  "Return",
  "Take out of circulation"
];

exports.findAllOperations = () => json(OPERATIONS);

const PROBLEMS = [
  { isbn: "1-86092-030-6", type: "WARNING", description: "Moderately damaged" },
  { isbn: "1-86092-002-0", type: "ERROR", description: "Missing pages" },
  { isbn: "1-86092-020-9", type: "ERROR", description: "Torn cover and pages" },
  { isbn: "1-86092-016-0", type: "WARNING", description: "Some pages are stained" }
];

exports.findAllProblems = () => json(PROBLEMS);
