import * as m from "mithril";
const stream = require("mithril/stream");
const scan = require("mithril/stream/scan");
import { view } from "./app/view-mithril";

import { Stream, applyModelChange, trace } from "meiosis";
const meiosisTracer = require("meiosis-tracer");

import { Model, Todo } from "./util";
import { app } from "./app";
import { extractRoute } from "./router";
import { todoStorage } from "./app/todo-storage";
import { actions } from "./main/actions";

export function startApp(view: Function) {
  todoStorage.loadAll().then((todos: Array<Todo>) => {
    const modelChanges: Stream<Function> = stream();

    //const router = createRouter(modelChanges);

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

    const element = document.getElementById("app");
    // workaround until TS support for Mithril 1.0 is available.
    const mRoute: any = m.route;

    mRoute(element, "/", {
      "/": {
        render: () => {
          console.log("render /")
          todoStorage.loadAll().then(actions.displayTodos(modelChanges));
          return view(state(), modelChanges);
        }
      },
      "/active": {
        render: () => {
          console.log("render /active")
          todoStorage.filter("active").then(actions.displayTodos(modelChanges));
          return view(state(), modelChanges);
        }
      },
      "/completed": {
        render: () => {
          console.log("render /completed")
          todoStorage.filter("completed").then(actions.displayTodos(modelChanges));
          return view(state(), modelChanges);
        }
      }
    });
    // state.map(m.redraw);

    trace({ streamLibrary: { stream }, modelChanges, streams: [ model, state ]});
    meiosisTracer({ selector: "#tracer" });
  });
}

startApp(view);
