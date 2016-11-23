import * as m from "mithril";
import { Model, Propose } from "../root/types";
import { ComponentConfig, VDom, View } from "./types";

const view: View<Model, Propose> = function(model: Model): VDom {
  const config = (element: Element, isInitialized: boolean): void => {
    console.log("isInitialized:", isInitialized);
  };

  return m("div", { config }, "Test");
  /*
  return m("#inProgress.modal", { config }, [
    m(".modal-dialog", [
      m(".modal-content", [
        m(".modal-header", "Loading"),
        m(".modal-body", "Please wait... (this delay is actually faked on the server for demonstration purposes.)")
      ])
    ])
  ]);
  */
};

/*
const postRender: PostRender<Model> = function(model: Model): void {
  $("#inProgress").modal(model.inProgress ? "show" : "hide");
};

const ready: Ready<any, any> = function(): void {
  $("#inProgress").modal({ backdrop: "static" });
};
*/

export function progressDialogConfig(): ComponentConfig<Model, Propose> {
  return { view };
}
