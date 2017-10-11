const flyd = require("flyd");

import { createApp } from "./app";
import { Model, Todo, UpdateFunction } from "./util";
import { todoStorage } from "./util/todo-storage";

import { init } from "snabbdom";
import attributes from "snabbdom/modules/attributes";
import classModule from "snabbdom/modules/class";
import eventlisteners from "snabbdom/modules/eventlisteners";
import props from "snabbdom/modules/props";
import { VNode } from "snabbdom/vnode";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";

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

  const applyUpdate = (model: any, modelUpdate: UpdateFunction) => modelUpdate(model);
  const models = flyd.scan(applyUpdate, initialModel, update);
  const app = createApp(update);
  const states = models.map(app.computeState);
  const element = document.getElementById("app");

  states.map((state: any) => render(element, app.view(state)));

  const router = app.createRouter();
  states.map(router.routeSync);

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ models, states ] });
  const meiosisTracer = require("meiosis-tracer");
  meiosisTracer({ selector: "#tracer" });
});
