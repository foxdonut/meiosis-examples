const Type = require("union-type");
const injectTapEventPlugin = require("react-tap-event-plugin");
import { Component, Config, MeiosisApp, Renderer, init } from "meiosis";
import { renderer } from "meiosis-react";

import { initRoutes } from "./root/routes";
import { rootConfig } from "./root/main";
import { Model } from "./root/model";
import { View } from "./root/view";
import { Proposal } from "./root/proposal";

Type.check = false;
injectTapEventPlugin();
initRoutes();

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
