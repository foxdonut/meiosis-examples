const Type = require("union-type");
import { Component, Config, MeiosisApp, init } from "meiosis";
import { renderer } from "meiosis-react";
import { rootConfig } from "./root/main";
import { Model } from "./root/model";
import { View } from "./root/view";
import { Proposal } from "./root/proposal";

Type.check = false;

const meiosis: MeiosisApp<Model, View, Proposal> = init<Model, View, Proposal>();

const rootComponent: Component<Model, View> = meiosis.createComponent(rootConfig());

meiosis.run(renderer().intoId(document, "app"), rootComponent);
