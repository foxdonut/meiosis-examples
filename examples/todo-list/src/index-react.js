import { render } from "react-dom";
import { startApp } from "./index";
import { view } from "./app/view-react";

startApp(view, render);
