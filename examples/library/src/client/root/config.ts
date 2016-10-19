import { Component } from "meiosis";
import { BookListModel, VDom } from "./types";
import { initialModel } from "./model";
import { RootViews, createView } from "./view";
import { receive } from "./receive";
import { ComponentConfig, Model, Propose } from "./types";

function rootConfig(config: RootViews): ComponentConfig<Model, Propose> {
  return {
    initialModel,
    view: createView(config),
    receive
  };
}

export { rootConfig };
