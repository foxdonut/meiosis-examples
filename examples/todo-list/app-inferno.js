import { on } from "meiosis";
import meiosisTracer from "meiosis-tracer";
import { render } from "inferno";
import { createApp } from "./app";
import { view } from "./todoMain/view-inferno.jsx";

const app = createApp();
const element = document.getElementById("app");
on(model => render(view(model), element), app.render);
meiosisTracer({ selector: "#tracer" });
