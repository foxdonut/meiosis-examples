import { MeiosisApp, MeiosisInstance, newInstance, on } from "meiosis";
import { render } from "react-dom";

import { initialModel } from "./root/model";
//import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal } from "./root/types";
import { ajax, createBookServices } from "./services";
import { urlHandler } from "./common";
import { circulationConfig } from "./circulation/config";

const injectTapEventPlugin = require("react-tap-event-plugin");
import { VDom } from "./react/types";
import { circulationView, rootView, progressDialogView } from "./react";

import { createServer } from "./sinonServer";
createServer();

injectTapEventPlugin();

const meiosis: MeiosisInstance<Model, Proposal> = newInstance<Model, Proposal>();

const bookServices = createBookServices(ajax);

/*
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("react"));
*/

const receive: any = null;
const app: MeiosisApp = meiosis.run({ initialModel, scanner: { model: receive } });
const view: any = (model: Model) => 42;
const element: HTMLElement = document.getElementById("app");
on((model: Model) => render(view(model), element), app["model"]);
