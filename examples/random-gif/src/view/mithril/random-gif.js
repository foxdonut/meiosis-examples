import m from "mithril";
import { only } from "../../util";
import { imgsrc, randomGif } from "../../random-gif";

const onEditTag = id => evt => randomGif.intents.editTag({ id, tag: evt.target.value });
const onNewGif = (id, tag) => () => randomGif.intents.newGif({ id, tag });

export const randomGifView = model =>
  m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: only(onEditTag(model.id)) }),
    m("button.btn.btn-xs.btn-default", { onclick: only(onNewGif(model.id, model.tag)) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
  ]);
