import { createRenderer } from "inferno";
import flyd from "flyd";

import createServer from "./sinonServer";
import { createApp } from "./app/index";

createServer();

const update = flyd.stream();
createApp(update).then(app => {
  const models = flyd.scan((x, f) => f(x), app.model(), update);
  const states = models.map(app.state)

  // https://infernojs.org/docs/api/inferno
  flyd.scan(createRenderer(), document.getElementById("app"), states.map(app.view));

  states.map(app.nextAction);

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ models ]});
})
