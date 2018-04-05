import flyd from "flyd";

import { createMain } from "../main";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";

export const createApp = (render, element) => {
  const update = flyd.stream();

  const main = createMain(update);
  const models = flyd.scan((model, modelUpdate) => modelUpdate(model), main.model(), update);

  models
    .map(main.state)
    .map(state => render(main.view(state), element));

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ models ]});

  return { models, main, render };
};
