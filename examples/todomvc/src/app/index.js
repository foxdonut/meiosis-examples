import flyd from "flyd";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { appState } from "./state";
import { createRouter } from "../router";
import { footer } from "../footer";
import { header } from "../header";
import { main } from "../main";
import { mergeIntoOne, scan } from "../util";
import { todoEdit } from "../todoEdit";
import { todoItem } from "../todoItem";
import { todoStorage } from "./store";

export function startApp(view, render) {
  const router = createRouter();

  const initialRoute = router.extractRoute(window.location.hash);

  const initialModel = {
    editTodo: {},
    route: initialRoute,
    newTodo: "",
    todos: todoStorage.loadAll()
  };

  const modelChanges = mergeIntoOne([
    footer.modelChanges,
    header.modelChanges,
    main.modelChanges,
    router.modelChanges,
    todoEdit.modelChanges,
    todoItem.modelChanges
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);
  const state = model.map(appState).map(router.state);

  const element = document.getElementById("app");
  state.map(state => render(element, view(state)));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model, state ]});
  meiosisTracer({ selector: "#tracer" });
}
