import { ComponentConfig, Model, Proposal, Propose } from "../root/types";
const createHistory = require("history").createBrowserHistory;
const Mapper = require("url-mapper");
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

const rootPath = "/examples/library";

const history = createHistory({
  basename: rootPath/*,
  getUserConfirmation: function(message: string, callback: any) {
    console.log("Are you sure?");
    return callback(window.confirm("Are you sure?"));
  }*/
});

function initRoutes(propose: Propose): void {
  const root = "/examples/library";
  // propose({ type: "routeChange" });
  /*
  const locationBar = new LocationBar();

  locationBar.onChange(function(path: string) {
    console.log("new path:", path);
  });

  locationBar.start({
    root
  });
  */

/*
  history.block(function(location: string, action: any) {
    return "Confirm leaving?";
  });
  */

  // handle browser Back button
  history.listen(function(location: any, action: string) {
    if (action === "POP") {
      propose({ type: "Root.UrlChanged", url: location.pathname });
    }
  });

  const initialUrl: string = window.location.pathname.substring(rootPath.length) || "/";
  propose({ type: "Root.UrlChanged", url: initialUrl });
}

function urlComponent(): ComponentConfig<Model, Propose> {
  const urlMapper = Mapper();

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
        case "Root.UrlChange":
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
    ready: initRoutes
  };
}

function gotoUrl(url: string): void {

}

export { LibraryUrl, libraryUrl, urlComponent, gotoUrl };