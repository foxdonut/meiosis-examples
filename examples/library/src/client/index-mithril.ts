import { MeiosisApp, MeiosisInstance, newInstance, on } from "meiosis";
import * as m from "mithril";

import { meiosis, createRoot } from "./root";
import { BookListModel, Model, Proposal } from "./root/types";
import { ajax, createBookServices } from "./services";
import { circulationConfig } from "./circulation/config";

import { VDom } from "./mithril/types";
import { circulationView, rootView, progressDialogConfig } from "./mithril";

import { createServer } from "./sinonServer";
createServer();

const bookServices = createBookServices(ajax);

/*
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices, circulationView));
const rootViews: RootViews<VDom> = { circulation, progressDialog };
const rootView: View<Model, Propose> = createRootView(rootViews);
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig(rootView));
meiosis.createComponent(urlComponent("mithril"));
*/

const root = createRoot("mithril");
const app: MeiosisApp = meiosis.run({ initialModel: root.initialModel, scanner: { model: root.receive } });
const element: HTMLElement = document.getElementById("app");
on((model: Model) => m.render(element, rootView(model)), app["model"]);
