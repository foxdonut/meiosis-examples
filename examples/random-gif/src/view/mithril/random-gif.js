import m from "mithril";
import { imgsrc } from "../../random-gif";

export const createRandomGif = ({ actions }) => model => {
  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: actions.onEditTag(model.id) }),
    m("button.btn.btn-xs.btn-default", { onclick: actions.onNewGif(model.id, model.tag) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
};
