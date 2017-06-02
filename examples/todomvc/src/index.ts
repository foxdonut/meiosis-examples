import { applyUpdate, Stream, trace, UpdateFunction, ViewFunction } from "meiosis";
const flyd = require("flyd");
// Only for using Meiosis Tracer in development.
const meiosisTracer = require("meiosis-tracer");

import { app } from "./app";
import { Model, Todo } from "./util";
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
  const update: Stream<UpdateFunction> = flyd.stream();

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

  const model = flyd.scan(applyUpdate, initialModel, update);
  const viewModel = model.map(app.state);
  const view = app.create(update);
  const element = document.getElementById("app");

  viewModel.map((state: any) => render(element, view(state)));

  const router = app.createRouter(update);
  viewModel.map(router.routeSync);

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ model, viewModel ] });
  meiosisTracer({ selector: "#tracer" });
});
