import { on, propose } from "meiosis";
import m from "mithril";
import { startApp } from "../common/";
import { createRoot } from "./root";

const { state } = startApp();
const root = createRoot(propose);
const element = document.getElementById("app");
const render = state => m.render(element, root(state));
on(render, state);
