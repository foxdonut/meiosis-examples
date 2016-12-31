import { on } from "meiosis";
import { render as reactRender } from "react-dom";
import { startApp } from "./app";
import { view } from "./view/react/index.jsx";

const { model } = startApp();
const element = document.getElementById("app");
const render = model => reactRender(view(model), element);
on(render, model);
