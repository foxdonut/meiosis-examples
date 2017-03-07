import { render } from "inferno";
import { startApp } from "./index";
import { view } from "./app/view-inferno.jsx";

startApp(view, render);
