const flyd = require("flyd");

import { createApp } from "./app";
import { Model, T, Todo, UpdateFunction, W } from "./util";
import { todoStorage } from "./util/todo-storage";

import { init } from "snabbdom";
import attributes from "snabbdom/modules/attributes";
import classModule from "snabbdom/modules/class";
import eventlisteners from "snabbdom/modules/eventlisteners";
import props from "snabbdom/modules/props";
import { VNode } from "snabbdom/vnode";

const patch = init([
  attributes,
  classModule,
  eventlisteners,
  props
]);

let currentView: VNode = null;

const render = (element: Element, nextView: VNode) => {
  if (currentView === null) {
    patch(element, nextView);
  }
  else {
    patch(currentView, nextView);
  }
  currentView = nextView;
};

todoStorage.loadAll().then((todos: Todo[]) => {
  const update: any = flyd.stream();

  const initialModel: Model = {
    editTodo: {},
    newTodo: "",
    filterBy: "",
    todoIds: todos.map((todo: Todo) => todo.id),
    todosById: todos.reduce((acc: { [id: string]: Todo }, todo: Todo) => {
      acc[todo.id] = todo;
      return acc;
    }, {})
  };

  const app = createApp(update);
  const models = flyd.scan(T, initialModel, update);
  const state = models.map(W(app.state));
  const element = document.getElementById("app");

  state.map((model: Model) => render(element, app.view(model)));

  const router = app.createRouter();
  state.map(router.routeSync);

  // Only for using Meiosis Tracer in development.
  const meiosisTracer = require("meiosis-tracer");
  meiosisTracer({ selector: "#tracer", streams: [ models, state ] });
});
