import flyd from "flyd";

import { createMain } from "../main";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";

export const createApp = render => {
  const update = flyd.stream();

  return createMain(update).then(main => {
    const initialModel = main.model();
    const applyUpdate = (model, modelUpdate) => modelUpdate(model);
    const models = flyd.scan(applyUpdate, initialModel, update);

    const element = document.getElementById("app");
    models.map(main.state);
    models.map(model => render(main.view(model), element));

    // Only for using Meiosis Tracer in development.
    trace({ update, dataStreams: [ models ]});

    return { models, view: main.view, render, element };
  });
};
