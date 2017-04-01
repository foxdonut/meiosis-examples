import { applyUpdate, createEvents, EventType, Stream, trace, UpdateFunction, ViewFunction } from "meiosis";
const flyd = require("flyd");
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

  const eventStream: Stream<EventType> = flyd.stream();
  const events: any = createEvents({
    eventStream,
    events: app.events,
    connect: {
      "*.footer.clearCompleted": "*.storage.onClearCompleted",
      "*.footer.filter": "*.storage.onFilter",
      "*.footer.loadAll": "*.storage.onLoadAll",
      "*.header.saveNewTodo": "*.storage.onSaveNewTodo",
      "*.routeChange": "*.router.onRouteChange",
      "*.storage.deleteTodoId": "*.todoItem.onDeleteTodoId",
      "*.storage.displayTodos": "*.main.onDisplayTodos",
      "*.storage.setCompleted": "*.todoItem.onSetCompleted",
      "*.storage.saveNewTodo": "*.header.onSaveNewTodo",
      "*.storage.saveTodo": "*.main.onUpdateTodo",
      "*.todoEdit.saveTodo": "*.storage.onSaveTodo",
      "*.todoItem.deleteTodoId": "*.storage.onDeleteTodoId",
      "*.todoItem.setCompleted": "*.storage.onSetCompleted"
    }
  });

  const initialModel: Model = {
    editTodo: {},
    newTodo: "",
    route: "",
    todoIds: todos.map((todo: Todo) => todo.id),
    todosById: todos.reduce((acc: { [id: string]: Todo }, todo: Todo) => {
      acc[todo.id] = todo;
      return acc;
    }, {})
  };

  const model = flyd.scan(applyUpdate, initialModel, update);
  const viewModel = model.map(app.state);
  const view = app.create(update, events);
  const element = document.getElementById("app");

  viewModel.map((state: any) => render(element, view(state)));

  trace({ update, dataStreams: [ model, viewModel ], otherStreams: [ eventStream ]});
  meiosisTracer({ selector: "#tracer" });
});
