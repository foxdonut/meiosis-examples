import { on } from "meiosis";
import m from "mithril";
import { startApp } from "./app";
import { createView } from "./view/mithril";

const app = startApp();
const view = createView(app);
const element = document.getElementById("app");
const render = model => m.render(element, view(model));
on(render, app.streams.model);
