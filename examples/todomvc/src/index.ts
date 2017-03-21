import { Stream, applyModelChange, trace } from "meiosis";
const flyd = require("flyd");
const meiosisTracer = require("meiosis-tracer");

import { Model, Todo } from "./util";
import { app } from "./app";
import { createRouter } from "./router";
import { footer } from "./footer";
import { todoStorage } from "./app/todo-storage";

export function startApp(view: Function, render: Function) {
  todoStorage.loadAll().then((todos: Array<Todo>) => {
    const modelChanges: Stream<Function> = flyd.stream();

    footer.addRoutes(modelChanges);
    const router = createRouter(modelChanges);

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

    const model = flyd.scan(applyModelChange, initialModel, modelChanges);
    const state = model.map(app.state).map(router.state);

    const element = document.getElementById("app");
    state.map((state: any) => render(element, view(state, modelChanges)));

    trace({ streamLibrary: flyd, modelChanges, streams: [ model, state ]});
    meiosisTracer({ selector: "#tracer" });
  });
}
