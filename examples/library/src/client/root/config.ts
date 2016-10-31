import { Component } from "meiosis";
import { BookListModel, RootViews } from "./types";
import { receive } from "./receive";
import { ComponentConfig, Model, Propose, View } from "./types";

function rootConfig<V>(view: View<Model, V, Propose>): ComponentConfig<Model, V, Propose> {
  return {
    view,
    receive
  };
}

export { rootConfig };
