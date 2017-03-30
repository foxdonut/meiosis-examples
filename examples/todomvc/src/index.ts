import { Stream, applyUpdate, createEvents, trace } from "meiosis";
const flyd = require("flyd");
const meiosisTracer = require("meiosis-tracer");

import { Model, Todo } from "./util";
import { app } from "./app";
import { main } from "./main";
import { createRouter } from "./router";
import { footer } from "./footer";
import { todoStorage } from "./app/todo-storage";

export function startApp(view: Function, render: Function) {
  todoStorage.loadAll().then((todos: Array<Todo>) => {
    const update: Stream<Function> = flyd.stream();

    const events: any = {
      //todosToDisplay: main.listeners.displayTodos(modelChanges)
    };

    //footer.addRoutes(update, events);
    const router = createRouter(update);

    const initialModel: Model = {
      editTodo: {},
      newTodo: "",
      todoIds: todos.map((todo: Todo) => todo.id),
      todosById: todos.reduce((acc: { [id: string] : Todo }, todo: Todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {}),
      route: router.extractRoute(window.location.hash)
    };

    const model = flyd.scan(applyUpdate, initialModel, update);
    const state = model.map(app.state);

    const element = document.getElementById("app");

    state.map((state: any) => render(element, view(state, update, events)));

    trace({ update, dataStreams: [ model, state ]});
    meiosisTracer({ selector: "#tracer" });
  });
}
