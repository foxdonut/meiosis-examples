import { createRenderer } from "inferno";
import flyd from "flyd";

import createServer from "./sinonServer";
import { createApp } from "./app/index";

createServer();

const update = flyd.stream();
createApp(update).then(app => {
  const models = flyd.scan((x, f) => f(x), app.model(), update);

  // https://infernojs.org/docs/api/inferno
  flyd.scan(createRenderer(), document.getElementById("app"), models.map(app.view));

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ models ]});
})
