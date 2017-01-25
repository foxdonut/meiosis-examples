import { on, run } from "meiosis";
import meiosisTracer from "meiosis-tracer";
import { render } from "preact";
import Type from "union-type";

import { initialModel, receive, nextAction } from "./form";
import { view } from "./form/view.jsx";

Type.check = false;

const app = run({ initialModel, scanner: receive, nextAction });
const element = document.getElementById("app");
on(model => render(view(model), element), app.render);
meiosisTracer({ selector: "#tracer" });
