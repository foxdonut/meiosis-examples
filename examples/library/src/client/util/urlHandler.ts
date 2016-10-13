import { ComponentConfig, Model, Proposal } from "../root/types";
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

function urlComponent(): ComponentConfig {
  return {
    receive: (model: Model, proposal: Proposal): Model => {
      return model;
    }
  };
}

function gotoUrl(url: string): void {

}

export { LibraryUrl, libraryUrl, urlComponent, gotoUrl };
