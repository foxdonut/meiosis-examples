import { render } from "inferno";
import { view } from "./todoMain/view-inferno.jsx";
import { startApp } from "./app";

startApp(view, render);
