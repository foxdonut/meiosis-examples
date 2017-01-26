import { on } from "meiosis";
import m from "mithril";
import meiosisTracer from "meiosis-tracer";
import { startApp } from "./app";
import { view } from "./view/jsx/index.jsx";

const app = startApp();
const element = document.getElementById("app");
const render = model => m.render(element, view(model));
on(render, app.render);
meiosisTracer({ selector: "#tracer" });
