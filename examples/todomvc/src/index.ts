import { Stream, applyModelChange, trace } from "meiosis";
const flyd = require("flyd");
const meiosisTracer = require("meiosis-tracer");

import { Model } from "./util";
import { app } from "./app";
import { createRouter } from "./router";
import { footer } from "./footer";
import { header } from "./header";
import { main } from "./main";
import { todoEdit } from "./todoEdit";
import { todoItem } from "./todoItem";

export function startApp(view: Function, render: Function) {
  const initialModel: Model = {
    editTodo: {},
    newTodo: "",
    todoIds: [],
    todosById: {}
  };

  const modelChanges: Stream<Function> = flyd.stream();
  const model = flyd.scan(applyModelChange, initialModel, modelChanges);
  const state = model.map(app.state);

  const element = document.getElementById("app");
  state.map((state: any) => render(element, view(state, modelChanges)));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model, state ]});
  meiosisTracer({ selector: "#tracer" });

  footer.addRoutes();
  createRouter();
}
