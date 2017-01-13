import { MeiosisApp, MeiosisInstance, newInstance, on } from "meiosis";
import * as m from "mithril";

import { initialModel } from "./root/model";
//import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal } from "./root/types";
import { ajax, createBookServices } from "./services";
import { urlComponent } from "./common";
import { circulationConfig } from "./circulation/config";

import { VDom } from "./mithril/types";
import { circulationView, rootView, progressDialogConfig } from "./mithril";

import { createServer } from "./sinonServer";
createServer();

const meiosis: MeiosisInstance<Model, Proposal> = newInstance<Model, Proposal>();

const bookServices = createBookServices(ajax);

/*
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("mithril"));
*/

const receive: any = null;
const app: MeiosisApp = meiosis.run({ initialModel, scanner: { model: receive } });
const view = (model: Model) => m("div");
const element: HTMLElement = document.getElementById("app");
on((model: Model) => m.render(element, view(model)), app["model"]);
