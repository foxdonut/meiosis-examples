import m from "mithril";
import { imgsrc } from "./index";

export const view = actions => (model, update) =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: actions.editTag(update, model.id) }),
    m("button.btn.btn-xs.btn-default", { onclick: actions.newGif(update, model) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
