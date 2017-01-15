import { MeiosisApp, MeiosisInstance, newInstance, on } from "meiosis";
import * as m from "mithril";

import { BookListModel, Model, Proposal, meiosis, createApp, propose, rendered } from "./root";

import { VDom } from "./mithril/types";
import { circulationView, rootView, progressDialogConfig } from "./mithril";

import { createServer } from "./sinonServer";
createServer();

/*
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("mithril"));
*/

const app: MeiosisApp = createApp("mithril");
const element: HTMLElement = document.getElementById("app");
on((model: Model) => {
  m.render(element, rootView(model));
  rendered(model);
}, app["model"]);
