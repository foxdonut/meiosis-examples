import * as SQL from "sql.js";

/*
var fs = require("fs");
var SQL = require("sql.js");
var fb = fs.readFileSync("library.db");
var db = new SQL.Database(fb);

db.run / db.exec

fs.writeFileSync("library.db", new Buffer(db.export()));

db.close();

// https://github.com/kripken/sql.js/wiki/Persisting-a-Modified-Database

function toBinString (arr) {
  var uarr = new Uint8Array(arr);
  var strings = [];
  var chunksize = 0xffff;

  // There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want
  for (var i=0; i*chunksize < uarr.length; i++){
    strings.push(String.fromCharCode.apply(null, uarr.subarray(i*chunksize, (i+1)*chunksize)));
  }
  return strings.join("");
}

window.localStorage.setItem("mydata", toBinString(db.export()));


function toBinArray (str) {
  var l = str.length;
  var arr = new Uint8Array(l);
  for (var i=0; i<l; i++) arr[i] = str.charCodeAt(i);
  return arr;
}
var db = new SQL.Database(toBinArray(localStorage.getItem("mydata")));
*/

export * from "./book";
