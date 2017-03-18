import m from "mithril";
import { imgsrc } from "./index";

export const view = actions => (model, update, events) =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: actions.editTag(update) }),
    m("button.btn.btn-xs.btn-default",
      { onclick: actions.newGif(update, events, model.id, model.tag) },
      "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
