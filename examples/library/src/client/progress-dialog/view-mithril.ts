import * as m from "mithril";
import { Model } from "../app";

const view: any = function(model: Model): any {
  return m("#inProgress.modal", [
    m(".modal-dialog", [
      m(".modal-content", [
        m(".modal-header", "Loading"),
        m(".modal-body", "Please wait... (this delay is actually faked on the server for demonstration purposes.)")
      ])
    ])
  ]);
};

const postRender: any = function(model: Model): void {
  $("#inProgress").modal(model.inProgress ? "show" : "hide");
};

const ready: any = function(): void {
  $("#inProgress").modal({ backdrop: "static" });
};

export function progressDialogConfig(): any {
  return { view, postRender, ready };
}
