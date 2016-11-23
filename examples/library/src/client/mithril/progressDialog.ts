import * as m from "mithril";
import { PostRender, Ready } from "meiosis";
import { Model, Propose } from "../root/types";
import { ComponentConfig, VDom, View } from "./types";

const view: View<Model, Propose> = function(model: Model): VDom {
  return m("#inProgress.modal", [
    m(".modal-dialog", [
      m(".modal-content", [
        m(".modal-header", "Loading"),
        m(".modal-body", "Please wait... (this delay is actually faked on the server for demonstration purposes.)")
      ])
    ])
  ]);
};

const postRender: PostRender<Model> = function(model: Model): void {
  $("#inProgress").modal(model.inProgress ? "show" : "hide");
};

const ready: Ready<any, any> = function(): void {
  $("#inProgress").modal({ backdrop: "static" });
};

export function progressDialogConfig(): ComponentConfig<Model, Propose> {
  return { view, postRender, ready };
}
