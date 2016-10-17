const injectTapEventPlugin = require("react-tap-event-plugin");
import { Component, MeiosisApp, Renderer, init } from "meiosis";
import { renderer } from "meiosis-react";

import { rootConfig } from "./root/config";
import { Model, Proposal, VDom } from "./root/types";
import { urlComponent } from "./util/urlHandler";

injectTapEventPlugin();

const meiosis: MeiosisApp<Model, VDom, Proposal> = init<Model, VDom, Proposal>();

const rootComponent: Component<Model, VDom> = meiosis.createComponent(rootConfig());
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
