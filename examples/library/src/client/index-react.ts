import { Component, MeiosisApp, Renderer, newInstance } from "meiosis";
import { initialModel } from "./root/model";
import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal, Propose, RootViews } from "./root/types";
import { ajax, createBookServices } from "./services";
import { urlComponent } from "./common";
import { circulationConfig } from "./circulation/config";

const injectTapEventPlugin = require("react-tap-event-plugin");
import { renderer } from "meiosis-react";
import { VDom } from "./react/types";
import { View, circulationView, createRootView, progressDialogConfig } from "./react";

import { createServer } from "./sinonServer";
createServer();

injectTapEventPlugin();

const meiosis: MeiosisApp<Model, Model, VDom, Proposal> = newInstance<Model, Model, VDom, Proposal>();

const bookServices = createBookServices(ajax);

const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("react"));

meiosis.run({ renderer: renderer().intoId(document, "app"), initialModel, rootComponent });
