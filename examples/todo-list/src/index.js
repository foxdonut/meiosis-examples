import { render } from "inferno";
import flyd from "flyd";
import { merge } from "ramda";

import ajaxServices from "./util/ajax-services";
import createServer from "./sinonServer";
import { createApp } from "./app/index";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

ajaxServices.loadTodos().then(todos => {
  const update = flyd.stream();
  const app = createApp(update);
  const initialModel = merge(app.model(), { list: { todos, message: "" } });
  const applyUpdate = (model, modelUpdate) => modelUpdate(model);
  const model = flyd.scan(applyUpdate, initialModel, update);

  const element = document.getElementById("app");
  model.map(model => render(app.view(model), element));

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ model ]});
  meiosisTracer({ selector: "#tracer" });
});
