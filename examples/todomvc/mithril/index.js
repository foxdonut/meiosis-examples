import { on } from "meiosis";
import m from "mithril";
import { startApp } from "../common/";
import { view } from "./root/view";

const { model } = startApp();
const element = document.getElementById("app");
const render = model => m.render(element, view(model));
on(render, model);
