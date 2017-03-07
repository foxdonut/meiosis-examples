import { render } from "react-dom";

import { startApp } from "./index";
import { view } from "./app/view-react";

const injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

startApp(view, (element: Element, view: any) => render(view, element));
