import m from "mithril";
import { onEditTag, onNewGif } from "../common/random-gif";
import { imgsrc } from "../../random-gif";

export const randomGifView = model =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: onEditTag(model.id) }),
    m("button.btn.btn-xs.btn-default", { onclick: onNewGif(model.id, model.tag) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
