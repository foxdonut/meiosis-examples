import flyd from "flyd";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { createRouter } from "./router";
import { footer } from "./footer";
import { header } from "./header";
import { main } from "./main";
import { mergeIntoOne, scan } from "./util";
import { todoEdit } from "./todoEdit";
import { todoItem } from "./todoItem";

export function startApp(view, render) {
  const initialModel = {
    editTodo: {},
    newTodo: "",
    todoIds: [],
    todosById: {}
  };

  const modelChanges = mergeIntoOne([
    header.modelChanges,
    main.modelChanges,
    todoEdit.modelChanges,
    todoItem.modelChanges
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);
  const state = model.map(app.state);

  const element = document.getElementById("app");
  state.map(state => render(element, view(state)));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model, state ]});
  meiosisTracer({ selector: "#tracer" });

  footer.addRoutes();
  createRouter();
}
