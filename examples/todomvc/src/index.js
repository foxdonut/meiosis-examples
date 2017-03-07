import flyd from "flyd";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { appState } from "./app/state";
import { createRouter } from "./router";
import { footer } from "./footer";
import { header } from "./header";
import { main } from "./main";
import { mergeIntoOne, scan } from "./util";
import { todoEdit } from "./todoEdit";
import { todoItem } from "./todoItem";

export function startApp(view, render) {
  const router = createRouter();
  footer.addRoutes();

  const initialRoute = router.extractRoute(window.location.hash);

  const initialModel = {
    editTodo: {},
    newTodo: "",
    route: initialRoute,
    todoIds: [],
    todosById: {}
  };

  const modelChanges = mergeIntoOne([
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

  main.intents.loadAllTodos();
}
