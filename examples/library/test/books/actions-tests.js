import test from "ava";

import * as Actions from "../../src/client/books/actions";

test("setSelectedBook selected", t => {
  const model1 = {
    books: [
      { title: "One", isbn: "isbn1" },
      { title: "Two", isbn: "isbn2" }
    ],
    selectedBooks: {
      "isbn2": { title: "Two", isbn: "isbn2" }
    }
  };

  const model2 = Actions.setSelectedBook(model1.books[0], true)(model1);

  t.is(model2.books, model1.books);
  t.is(model2.selectedBooks[model1.books[0].isbn].isbn, model1.books[0].isbn);
  t.is(model2.selectedBooks[model1.books[1].isbn].isbn, model1.books[1].isbn);
});

test("setSelectedBook de-selected", t => {
  const model1 = {
    books: [
      { title: "One", isbn: "isbn1" },
      { title: "Two", isbn: "isbn2" }
    ],
    selectedBooks: {
      "isbn2": { title: "Two", isbn: "isbn2" }
    }
  };

  const model2 = Actions.setSelectedBook(model1.books[1], false)(model1);

  t.is(model2.books, model1.books);
  t.is(model2.selectedBooks[model1.books[0].isbn], undefined);
  t.is(model2.selectedBooks[model1.books[1].isbn], undefined);
});

test("selectBook selected", t => new Promise(resolve => {
  const model1 = {
    books: [
      { title: "One", isbn: "isbn1" },
      { title: "Two", isbn: "isbn2" }
    ],
    selectedBooks: {
      "isbn2": { title: "Two", isbn: "isbn2" }
    }
  };

  const update = fn => {
    const model2 = fn(model1);

    t.is(model2.books, model1.books);
    t.is(model2.selectedBooks[model1.books[0].isbn].isbn, model1.books[0].isbn);
    t.is(model2.selectedBooks[model1.books[1].isbn].isbn, model1.books[1].isbn);

    resolve();
  };

  const actions = Actions.createActions(update);
  actions.selectBook(model1.books[0], { target: { checked: true } });
}));

test("selectBook de-selected", t => new Promise(resolve => {
  const model1 = {
    books: [
      { title: "One", isbn: "isbn1" },
      { title: "Two", isbn: "isbn2" }
    ],
    selectedBooks: {
      "isbn2": { title: "Two", isbn: "isbn2" }
    }
  };

  const update = fn => {
    const model2 = fn(model1);

    t.is(model2.books, model1.books);
    t.is(model2.selectedBooks[model1.books[0].isbn], undefined);
    t.is(model2.selectedBooks[model1.books[1].isbn], undefined);

    resolve();
  };

  const actions = Actions.createActions(update);
  actions.selectBook(model1.books[1], { target: { checked: false } });
}));
