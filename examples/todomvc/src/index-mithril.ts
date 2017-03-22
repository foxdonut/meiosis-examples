import * as m from "mithril";
const stream = require("mithril/stream");
const scan = require("mithril/stream/scan");
import { view } from "./app/view-mithril";

import { Stream, applyModelChange, trace } from "meiosis";
const meiosisTracer = require("meiosis-tracer");

import { Model, Todo } from "./util";
import { app } from "./app";
import { main } from "./main";
import { todoStorage } from "./app/todo-storage";

export function startApp(view: Function) {
  todoStorage.loadAll().then((todos: Array<Todo>) => {
    const modelChanges: Stream<Function> = stream();

    const prefix = "#";
    const prefixLength = prefix.length;
    const extractRoute = (hash: string) => (hash && hash.substring(prefixLength)) || "/";

    const initialModel: Model = {
      editTodo: {},
      newTodo: "",
      todoIds: todos.map((todo: Todo) => todo.id),
      todosById: todos.reduce((acc: { [id: string] : Todo }, todo: Todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {}),
      route: extractRoute(window.location.hash)
    };

    const model = scan(applyModelChange, initialModel, modelChanges);
    const state = model.map(app.state);//.map(router.state);

    const events = {
      todosToDisplay: main.listeners.displayTodos(modelChanges)
    };

    const element = document.getElementById("app");
    // workaround until TS support for Mithril 1.0 is available.
    const mRoute: any = m.route;

    mRoute.prefix(prefix);
    const render = () => view(state(), modelChanges, events);
    const setRoute = (update: Function, path: string) => update((model: Model) => {
      model.route = path;
      return model;
    });

    mRoute(element, "/", {
      "/": {
        onmatch: (args: any, path: string) => {
          setRoute(modelChanges, path);
          todoStorage.loadAll().then(events.todosToDisplay);
        },
        render
      },
      "/active": {
        onmatch: (args: any, path: string) => {
          setRoute(modelChanges, path);
          todoStorage.filter("active").then(events.todosToDisplay);
        },
        render
      },
      "/completed": {
        onmatch: (args: any, path: string) => {
          setRoute(modelChanges, path);
          todoStorage.filter("completed").then(events.todosToDisplay);
        },
        render
      }
    });
    state.map(m.redraw);

    trace({ streamLibrary: { stream }, modelChanges, streams: [ model, state ]});
    meiosisTracer({ selector: "#tracer" });
  });
}

startApp(view);
