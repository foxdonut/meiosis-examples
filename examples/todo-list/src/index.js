import { render } from "inferno";
import flyd from "flyd";
import { merge } from "ramda";

import ajaxServices from "./util/ajax-services";
import createServer from "./sinonServer";
import { app } from "./app/index";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

ajaxServices.loadTodos().then(todos => {
  const initialModel = merge(app.model(), { list: { todos, message: "" } });
  const update = flyd.stream();
  const applyUpdate = (model, modelUpdate) => modelUpdate(model);
  const model = flyd.scan(applyUpdate, initialModel, update);

  const element = document.getElementById("app");
  const view = app.create(update);
  model.map(model => render(view(model), element));

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ model ]});
  meiosisTracer({ selector: "#tracer" });
});
