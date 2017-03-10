import m from "mithril";
import { editTag, newGif } from "./actions";
import { imgsrc } from "./index";

export const randomGifView = (model, update, events) =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: editTag(update, model.id) }),
    m("button.btn.btn-xs.btn-default", { onclick: newGif(update, events, model) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
