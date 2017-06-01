import flyd from "flyd";
import { render } from "preact";

// Only for using Meiosis Tracer in development.
import { applyUpdate, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { entry } from "./entry";
import { date } from "./date";
import { temperature } from "./temperature";

const initialModel = {
  saved: "",
  entry: entry.model(),
  date: date.model(),
  temperature: {
    air: temperature.model("Air temperature:"),
    water: temperature.model("Water temperature:")
  }
};

const update = flyd.stream();
const model = flyd.scan(applyUpdate, initialModel, update);

const view = app.create(update);
const element = document.getElementById("app");
model.map(model => render(view(model), element, element.lastElementChild));

// Only for using Meiosis Tracer in development.
trace({ update, dataStreams: [ model ] });
meiosisTracer({ selector: "#tracer" });
