import { Stream } from "meiosis";
import { Model, Proposal } from "../root/types";
import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";

interface LibraryUrl {
  get: string,
  save: string,
  delete: (todoId: number) => string;
};

const libraryUrl: LibraryUrl = {
  get: "/todoList",
  save: "/api/saveTodo",
  delete: function(todoId: number) {
    return "/api/deleteTodo/" + String(todoId);
  }
};

function initRoutes(history: any, rootPath: string): (propose: Stream<Proposal>) => void {
  return function(propose: Stream<Proposal>): void {
    // handle browser Back button
    history.listen(function(location: any, action: string) {
      if (action === "POP") {
        propose({ type: "Root.UrlChanged", url: location.pathname });
      }
    });

    const initialUrl: string = window.location.pathname.substring(rootPath.length) || "/";
    propose({ type: "Root.UrlChanged", url: initialUrl });
  };
}

function urlComponent(variant: string): any {
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

  return {
    receive: (model: Model, proposal: Proposal): Model => {
      switch (proposal.type) {
        case "Root.LocationChange":
          history.push(proposal.url);
        case "Root.UrlChanged":
          model.url = proposal.url;
          crossroads.parse(proposal.url, [model]);
          break;
      }
      return model;
    },
    postRender: (model: Model): void => {
      history.replace(model.url);
    },
    ready: initRoutes(history, rootPath)
  };
}

export { LibraryUrl, libraryUrl, urlComponent };
