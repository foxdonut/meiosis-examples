import { createRenderer } from "inferno";
import flyd from "flyd";
import { applyTo, merge } from "ramda";

import ajaxServices from "./util/ajax-services";
import createServer from "./sinonServer";
import { createApp } from "./app/index";

createServer();

ajaxServices.loadTodos().then(todos => {
  const update = flyd.stream();
  const app = createApp(update);
  const models = flyd.scan(applyTo,
    merge(app.model(), { list: { todos, message: "" } }), update);

  // https://infernojs.org/docs/api/inferno
  flyd.scan(createRenderer(), document.getElementById("app"), models.map(app.view));

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]});
});
