const injectTapEventPlugin = require("react-tap-event-plugin");
import { Component, MeiosisApp, Renderer, init } from "meiosis";
import { renderer } from "meiosis-react";

import { rootConfig } from "./root/config";
import { BookListModel, Model, Proposal, VDom } from "./root/types";
import { ajax, createBookServices } from "./services";
import { progressDialogConfig, urlComponent } from "./common";
import { circulationConfig } from "./circulation/config";

injectTapEventPlugin();

const meiosis: MeiosisApp<Model, VDom, Proposal> = init<Model, VDom, Proposal>();

const bookServices = createBookServices(ajax);
const progressDialog: Component<Model, VDom> = meiosis.createComponent(progressDialogConfig());
const circulation: Component<BookListModel, VDom> = meiosis.createComponent(circulationConfig(bookServices));
const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig({progressDialog, circulation}));
meiosis.createComponent(urlComponent());

meiosis.run(renderer().intoId(document, "app"), rootComponent);
