import { render } from "react-dom";

import { startApp } from "./app";
import { view } from "./app/view-mithril";

const injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

startApp("react", view, (element: Element, view: any) => render(view, element));
