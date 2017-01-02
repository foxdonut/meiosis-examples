import m from "mithril";
import { handlers, imgsrc } from "../../random-gif";

export const view = (model, id) => {
  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: handlers.onEditTag(id) }),
    m("button.btn.btn-xs.btn-default", { onclick: handlers.onNewGif(id, model.tag) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
};
