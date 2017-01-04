import { on } from "meiosis";
import m from "mithril";
import { startApp } from "../common/";
import { view } from "./root/view";

const { state } = startApp();
const element = document.getElementById("app");
const render = state => m.render(element, view(state));
on(render, state);
