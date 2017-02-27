import flyd from "flyd";
import createServer from "../sinonServer";
import services from "./services";
import { mergeIntoOne, nest, scan } from "../util/stream-util";
import { todoList } from "../todoList";
import { todoForm } from "../todoForm";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

export function startApp(view, render) {
  createServer();

  const initialModel = {
    form: todoForm.initialModel(),
    list: todoList.initialModel()
  };

  const modelChanges = mergeIntoOne([
    nest("list", todoList.modelChanges),
    nest("form", todoForm.modelChanges)
  ]);
  const model = scan(applyModelChange, initialModel, modelChanges);

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ]});
  meiosisTracer({ selector: "#tracer" });

  const element = document.getElementById("app");
  model.map(model => render(view(model), element));

  todoList.actions.requestLoadList(true);
  services.loadTodos().then(todoList.actions.loadedList);
}
