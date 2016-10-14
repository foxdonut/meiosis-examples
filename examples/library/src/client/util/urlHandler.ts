import { ComponentConfig, Model, Proposal, Propose } from "../root/types";
const Mapper = require("url-mapper");
const createHistory = require("history").createBrowserHistory;

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
      propose({ type: "UrlChange", url: location.pathname });
    }
  });

  const initialUrl: string = window.location.pathname.substring(rootPath.length) || "/";
  propose({ type: "UrlChange", url: initialUrl });
}

function urlComponent(): ComponentConfig {
  const urlMapper = Mapper();

  const urlToTabMappings = {
    "/other": "other",
    "*": "books"
  };

  const tabToUrlMappings = {
    "books": "/",
    "other": "/other"
  };

  return {
    receive: (model: Model, proposal: Proposal): Model => {
      switch (proposal.type) {
        case "UrlChange":
          model.url = proposal.url;
          model.tab = urlMapper.map(proposal.url, urlToTabMappings).match;
          break;
        case "TabChange":
          model.url = tabToUrlMappings[proposal.tab];
          model.tab = proposal.tab;
          history.push(model.url);
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