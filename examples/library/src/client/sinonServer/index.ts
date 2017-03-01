const sinon = require("sinon/pkg/sinon");

import { Database } from "sql.js";
import { Promise } from "es6-promise";
import { Book, getAllBooks } from "../../persistence";

function loadDatabase(): Promise<Database> {
  return new Promise<Database>((resolve: (value: Database) => void, reject: (error: any) => void) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", "/examples/library/library.db", true);
    xhr.responseType = "arraybuffer";

    xhr.onload = function(evt: Event): void {
      const uInt8Array: Uint8Array = new Uint8Array(xhr.response);
      const db: Database = new Database(uInt8Array);

      resolve(db);
    };
    xhr.send();
  });
}

export function createServer(): Promise<void> {
  return loadDatabase().then((db: Database) => {
    const server: Sinon.SinonFakeServer = sinon.fakeServer.create();
    server.autoRespond = true;
    const headers: any = {"Content-Type": "application/json"};

    server.respondWith("GET", "/examples/library/api/books", function(request: Sinon.SinonFakeXMLHttpRequest): void {
      const books: Array<Book> = getAllBooks(db);
      const content: string = JSON.stringify(books);
      request.respond(200, headers, content);
    });

    /*
    server.respondWith("DELETE", /\/api\/deleteTodo\/(\d+)/, function(request: Sinon.SinonFakeXMLHttpRequest): void {
      request.respond(204, null, null);
    });
    */
  });
}

/*
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
