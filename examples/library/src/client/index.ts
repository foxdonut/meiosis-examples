const injectTapEventPlugin = require("react-tap-event-plugin");
import { Component, MeiosisApp, Renderer, init } from "meiosis";
import { renderer } from "meiosis-react";

import { rootConfig } from "./root/main";
import { Model, Proposal, View } from "./root/types";

injectTapEventPlugin();

const meiosis: MeiosisApp<Model, View, Proposal> = init<Model, View, Proposal>();

const rootComponent: Component<Model, View> = meiosis.createComponent(rootConfig());

/*
const reactRenderer: Renderer<Model, View, Proposal> = renderer().intoId(document, "app");

const muiRenderer: Renderer<Model, View, Proposal> = (model: Model, rootComponent: Component<Model, View>): any => {
  //injectTapEventPlugin();
  return reactRenderer(model, rootComponent);
};

meiosis.run(muiRenderer, rootComponent);
*/
meiosis.run(renderer().intoId(document, "app"), rootComponent);
