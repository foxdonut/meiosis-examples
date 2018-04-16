import { createRenderer } from "inferno";
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
  const models = flyd.scan(applyUpdate, initialModel, update);

  // https://infernojs.org/docs/api/inferno
  flyd.scan(createRenderer(), document.getElementById("app"), models.map(app.view));

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ models ]});
  meiosisTracer({ selector: "#tracer" });
});
