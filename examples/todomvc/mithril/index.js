import { on, propose } from "meiosis";
import m from "mithril";
import { startApp } from "../common/";
import { createRoot } from "./root";
import { footerReady } from "../common/footer/ready";

const app = startApp();
const root = createRoot(propose);
const element = document.getElementById("app");
const render = state => m.render(element, root(state));
on(render, app.render);
footerReady(propose);
