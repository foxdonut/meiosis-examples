import test, { TestContext } from "ava";
import { Database } from "sql.js";
import * as fs from "fs";
import { Book, getAllBooks } from "../../../build/persistence/index";

test("implements a function to get all books", (t: TestContext) => {
  const db: Database = new Database();
  const sql = fs.readFileSync("../../../src/persistence/ddl.sql", "utf8");
  db.run(sql);

  const insert = fs.readFileSync("../src/book-tests.sql", "utf8");
  db.run(insert);

  const books: Array<Book> = getAllBooks(db);

  t.is(books.length, 2, "number of books");

  t.is(books[0].title, "Book 1", "book title");
  t.is(books[1].title, "Book 2", "book title");
});
