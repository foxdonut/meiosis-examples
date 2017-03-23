import flyd from "flyd";
import createServer from "./sinonServer";
import services from "./app/services";
import { nest } from "./util/nest";
import { todoList } from "./todoList";
import { todoForm } from "./todoForm";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

export function startApp(view, render) {
  createServer();

  const initialModel = {
    form: todoForm.initialModel(),
    list: todoList.initialModel()
  };

  const modelChanges = flyd.stream();
  const model = flyd.scan(applyModelChange, initialModel, modelChanges);

  const events = {
  };

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ]});
  meiosisTracer({ selector: "#tracer" });

  const element = document.getElementById("app");
  model.map(model => render(view(model, modelChanges, events), element));

  const todoListListeners = todoList.listeners(nest(modelChanges, "list"));
  todoListListeners.loadingPleaseWait();
  services.loadTodos().then(todoListListeners.todoList);
}
