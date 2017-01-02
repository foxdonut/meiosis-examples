import m from "mithril";
import { handlers } from "../../random-gif";

export const view = (model, id) => {
  const src = model.isLoading ? "/examples/random-gif/images/loading.gif" : (
    model.isError ? "/examples/random-gif/images/error.png" : model.image_url
  );

  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: handlers.onEditTag(id) }),
    m("button.btn.btn-xs.btn-default", { onclick: handlers.onNewGif(id, model.tag) }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src }) ])
  ]);
};
