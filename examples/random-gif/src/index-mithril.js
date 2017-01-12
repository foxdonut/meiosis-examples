import { on } from "meiosis";
import m from "mithril";
import { startApp } from "./app";
import { view } from "./view/mithril";

const app = startApp();
const element = document.getElementById("app");
const render = model => m.render(element, view(model));
on(render, app.model);
