const injectTapEventPlugin = require("react-tap-event-plugin");
import { Component, MeiosisApp, Renderer, init } from "meiosis";
import { renderer } from "meiosis-react";

import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal, VDom } from "./root/types";
import { ajax } from "./util/ajax-axios";
import { createBookServices } from "./services/book";
import { urlComponent } from "./common/urlHandler";
import { progressDialogConfig } from "./common/progressDialog";
import { circulationConfig } from "./circulation/config";

injectTapEventPlugin();

const meiosis: MeiosisApp<Model, VDom, Proposal> = init<Model, VDom, Proposal>();

const bookServices = createBookServices(ajax);
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices));
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig({progressDialog, circulation}));
meiosis.createComponent(urlComponent());

/*
const reactRenderer: Renderer<Model, View, Proposal> = renderer().intoId(document, "app");

const muiRenderer: Renderer<Model, View, Proposal> = (model: Model, rootComponent: Component<Model, View>): any => {
  //injectTapEventPlugin();
  return reactRenderer(model, rootComponent);
};

meiosis.run(muiRenderer, rootComponent);
*/
meiosis.run(renderer().intoId(document, "app"), rootComponent);
