import * as m from "mithril";
import { Model, Propose } from "../root/types";
import { ComponentConfig, VDom, View } from "./types";

const view: View<Model, Propose> = function(model: Model): VDom {
  return m("div", model.inProgress ? "Please wait..." : "");
}

export function progressDialogConfig(): ComponentConfig<Model, Propose> {
  return { view };
}
