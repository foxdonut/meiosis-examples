import { Stream } from "meiosis";

import { Model } from "../app";
import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";

export interface LibraryUrl {
  get: string,
  save: string,
  delete: (todoId: number) => string;
};

export const libraryUrl: LibraryUrl = {
  get: "/todoList",
  save: "/api/saveTodo",
  delete: function(todoId: number) {
    return "/api/deleteTodo/" + String(todoId);
  }
};

function initRoutes(history: any, rootPath: string): void {
  // handle browser Back button
  history.listen(function(location: any, action: string) {
    if (action === "POP") {
      //propose({ type: "Root.UrlChanged", url: location.pathname });
    }
  });

  const initialUrl: string = window.location.pathname.substring(rootPath.length) || "/";
  //propose({ type: "Root.UrlChanged", url: initialUrl });
}

export function urlHandler(variant: string): any {
  const rootPath = "/examples/library/" + variant;

  const history = createHistory({
    basename: rootPath
  });

  crossroads.addRoute("/circulation/:id:", function(model: Model, id: string) {
    model.tab = "circulation";
    console.log("circulation id:", id);
  });

  crossroads.addRoute("/members/:id:", function(model: Model, id: string) {
    model.tab = "members";
    console.log("member id:", id);
  });

  crossroads.addRoute("/orders/:id:", function(model: Model, id: string) {
    model.tab = "orders";
    console.log("order id:", id);
  });

  crossroads.addRoute("/repairs/:id:", function(model: Model, id: string) {
    model.tab = "repairs";
    console.log("repairs id:", id);
  });

  crossroads.addRoute("/other/:id:", function(model: Model, id: string) {
    model.tab = "other";
    console.log("other id:", id);
  });

  crossroads.addRoute(/^.*$/, function(model: Model) {
    model.tab = "books";
  });

  initRoutes(history, rootPath);

  return {
    receive: (model: Model, proposal: any): Model => {
      switch (proposal.type) {
        case "Root.LocationChange":
          history.push(proposal.url);
        case "Root.UrlChanged":
          model.url = proposal.url;
          history.replace(model.url);
          crossroads.parse(proposal.url, [model]);
          break;
      }
      return model;
    }
  };
}
