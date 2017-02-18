import { render } from "react-dom";
import { view } from "./todoMain/view-react";
import { startApp } from "./app";

startApp(view, render);
