import { on } from "meiosis";
import m from "mithril";
import { startApp } from "../common/";
import { root } from "./root";

const { state } = startApp();
const element = document.getElementById("app");
const render = state => m.render(element, root(state));
on(render, state);
