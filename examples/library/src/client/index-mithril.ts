import { Component, MeiosisApp, Renderer, init } from "meiosis";
import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal, Propose, RootViews } from "./root/types";
import { ajax, createBookServices } from "./services";
import { urlComponent } from "./common";
import { circulationConfig } from "./circulation/config";

import { renderer } from "meiosis-mithril";
import { VDom } from "./mithril/types";
//import { View, circulationView, createRootView, progressDialogConfig } from "./mithril";

const meiosis: MeiosisApp<Model, VDom, Proposal> = init<Model, VDom, Proposal>();

const bookServices = createBookServices(ajax);

/*
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
*/
import * as m from "mithril";
const rootComponent: Component<Model, VDom> = meiosis.createComponent({
  view: function(model: Model): VDom { return m("div", "Hello, Mithril"); }
});
//const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("mithril"));

meiosis.run(renderer().intoId(document, "app"), rootComponent);
