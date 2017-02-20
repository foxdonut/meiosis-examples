import flyd from "flyd";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
import { scan } from "../util";
import { todoStorage } from "./store";
import { appState } from "./state";

export function startApp(view, render) {
  const initialModel = {
    editTodo: {},
    filter: "all",
    newTodo: "",
    todos: todoStorage.loadAll()
  };

  const modelChanges = flyd.stream();

  const model = scan(applyModelChange, initialModel, modelChanges);
  const state = model.map(appState);

  //footerReady(propose);
  const element = document.getElementById("app");
  state.map(state => render(element, view(state)));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model, state ]});
  meiosisTracer({ selector: "#tracer" });
}
