import flyd from "flyd";
import createServer from "../sinonServer";
import services from "../todoMain/services";
import { mergeIntoOne, nest, scan } from "../util/stream-util";
import { todoList } from "../todoList";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

export function startApp(view, render) {
  createServer();

  const initialModel = {
    form: {
      todo: {
        id: "",
        priority: "",
        description: ""
      },
      validationErrors: { }
    },
    list: todoList.initialModel()
  };

  const modelChanges = mergeIntoOne([
    nest("list", todoList.modelChanges)
  ]);
  const model = scan(applyModelChange, initialModel, modelChanges);

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ]});
  meiosisTracer({ selector: "#tracer" });

  const element = document.getElementById("app");
  model.map(model => render(view(model), element));

  todoList.actions.requestLoadList(true);
  services.loadTodos.then(todoList.actions.loadedList);
}
