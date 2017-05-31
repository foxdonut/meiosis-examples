import React from "react";

import { home } from "./home";
import { coffee } from "./coffee";
import { books } from "./books";
import { bookSummary } from "./bookSummary";
import { bookDetails } from "./bookDetails";

export const app = {
  model: () => ({
    page: home.page,
    params: {},
    coffees: [
      { id: "c1", description: "Coffee 1" },
      { id: "c2", description: "Coffee 2" }
    ],
    books: [
      { id: "b1", title: "Book 1" },
      { id: "b2", title: "Book 2" }
    ]
  }),

  create: update => {
    const pageMap = [home, coffee, books, bookSummary, bookDetails].reduce(
      (acc, next) => {
        acc[next.page.id] = next.create(update);
        return acc;
      }, {}
    );

    return model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : home.page.id;
      const currentTab = model.page.tab;
      const page = pageMap[currentPageId];
      const isActive = tab => tab === currentTab ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive(home.page.id)}>
                <a href="#/">Home</a>
              </li>
              <li className={isActive(coffee.page.id)}>
                <a href="#/coffee">Coffee</a>
              </li>
              <li className={isActive(books.page.id)}>
                <a href="#/books">Books</a>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={() => home.display(update)}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={() => coffee.display(update, {})}>Coffee</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={() => books.display(update, {})}>Books</button>
              </li>
            </ul>
          </nav>
          {page(model)}
        </div>
      );
    };
  }
};
