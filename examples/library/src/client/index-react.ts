import { MeiosisApp, MeiosisInstance, newInstance, on } from "meiosis";
import { render } from "react-dom";

import { BookListModel, Model, Proposal, meiosis, createApp, propose } from "./root";

import { VDom, circulationView, rootView } from "./react";

import { createServer } from "./sinonServer";
createServer();

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const app: MeiosisApp = createApp("react");
const element: HTMLElement = document.getElementById("app");
on((model: Model) => render(rootView(model), element), app["render"]);
