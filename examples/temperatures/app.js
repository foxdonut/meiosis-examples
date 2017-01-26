import { on, run } from "meiosis";
import meiosisTracer from "meiosis-tracer";
import { render } from "preact";
import Type from "union-type";

import { initialModel, receive, nextAction } from "./form";

export const app = view => {
  Type.check = false;

  const app = run({ initialModel, scanner: receive, nextAction });
  const element = document.getElementById("app");
  on(model => render(view(model), element, element.lastElementChild), app.render);
  meiosisTracer({ selector: "#tracer" });
};
