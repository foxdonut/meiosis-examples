import { Component } from "meiosis";
import { BookListModel, RootViews } from "./types";
import { initialModel } from "./model";
import { receive } from "./receive";
import { ComponentConfig, Model, Propose, View } from "./types";

function rootConfig<V>(view: View<Model, V, Propose>): ComponentConfig<Model, V, Propose> {
  return {
    initialModel,
    view,
    receive
  };
}

export { rootConfig };
