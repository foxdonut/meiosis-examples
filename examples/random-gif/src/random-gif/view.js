import m from "mithril";
import { imgsrc } from "./index";

export const view = actions => (model, update, events) =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: actions.editTag(model, update) }),
    m("button.btn.btn-xs.btn-default", { onclick: actions.newGif(model, update, events) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
