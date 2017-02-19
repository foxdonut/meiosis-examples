import { render } from "inferno";
import { view } from "./app/view-inferno.jsx";
import { startApp } from "./app";

startApp(view, render);
