import { Component } from "meiosis";
import { BookListModel, VDom } from "./types";
import { initialModel } from "./model";
import { createView } from "./view";
import { receive } from "./receive";
import { ComponentConfig, Model, Propose } from "./types";

function rootConfig(circulation: Component<BookListModel, VDom>): ComponentConfig<Model, Propose> {
  return {
    initialModel,
    view: createView(circulation),
    receive
  };
}

export { rootConfig };
