import test from "ava";
import $ from "jquery";
import { prepareDom } from "../util";

import { createView } from "../../src/client/books/view";

let dom = null;
let booksView = null;

test.beforeEach(function() {
  dom = prepareDom();
  booksView = createView({});
});

test("books renders a list of books", t => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];
  dom.render(booksView({ books }));

  const booksList = dom.element.find(".book-list");
  t.is(booksList.length, 1);

  const bookItems = dom.element.find(".book-item");
  t.is(bookItems.length, books.length);

  const bookTitles = dom.element.find(".book-title");
  t.is(bookTitles.length, books.length);
  for (let i = 0, tot = bookTitles.length; i < tot; i++) {
    t.is($(bookTitles[i]).text(), books[i].title);
  }
});

test("books renders problem type of book", t => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];
  const problems = {
    "isbn 2": { type: "ERROR", description: "Torn pages" }
  };
  dom.render(booksView({ books, problems }));

  const bookProblems = dom.element.find(".book-problem-type");
  t.is(bookProblems.length, books.length);

  const index = 1;
  const bookProblem = $(bookProblems[index]);
  const problem = problems[books[index].isbn];

  t.is(bookProblem.text(), problem.type);
});

test("books renders problem description of book", t => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];
  const problems = {
    "isbn 2": { type: "ERROR", description: "Torn pages" }
  };
  dom.render(booksView({ books, problems }));

  const bookProblems = dom.element.find(".book-problem-description");
  t.is(bookProblems.length, books.length);

  const index = 1;
  const bookProblem = $(bookProblems[index]);
  const problem = problems[books[index].isbn];

  t.is(bookProblem.text(), problem.description);
});

test("books renders selected books", t => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];
  const selectedBooks = {
    "isbn 2": { title: "Two", isbn: "isbn 2" }
  };
  dom.render(booksView({ books, selectedBooks }));

  const bookSelects = dom.element.find(".book-select");
  t.is(bookSelects.length, books.length);

  t.is($(bookSelects[0]).is(":checked"), false);
  t.is($(bookSelects[1]).is(":checked"), true);
});

test("books selects a book", t => new Promise(resolve => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];

  booksView = createView({
    selectBook: (book, evt) => {
      t.is(book, books[1]);
      t.is(evt.target.checked, true);
      resolve();
    }
  });

  dom.render(booksView({ books }));

  const bookSelects = dom.element.find(".book-select");
  $(bookSelects[1]).trigger("click");
}));

test("books de-selects a book", t => new Promise(resolve => {
  const books = [
    { title: "One", isbn: "isbn 1" },
    { title: "Two", isbn: "isbn 2" }
  ];
  const selectedBooks = {
    "isbn 2": { title: "Two", isbn: "isbn 2" }
  };

  booksView = createView({
    selectBook: (book, evt) => {
      t.is(book, books[1]);
      t.is(evt.target.checked, false);
      resolve();
    }
  });

  dom.render(booksView({ books, selectedBooks }));

  const bookSelects = dom.element.find(".book-select");
  $(bookSelects[1]).trigger("click");
}));
