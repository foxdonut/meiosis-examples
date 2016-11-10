import m from "mithril";

export function view(state, actions) {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(evt.target.value);
  };

  const onNewGif = evt => {
    evt.preventDefault();
    actions.newGif(state.tag);
  };

  const src = state.isLoading ? "/examples/random-gif/images/loading.gif" : (
    state.isError ? "/examples/random-gif/images/error.png" : state.image_url
  );

  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: state.tag, onkeyup: onEditTag }),
    m("button.btn.btn-xs.btn-default", { onclick: onNewGif }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src }) ])
  ]);
}
