import m from "mithril";

export function view(state, actions) {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(evt.target.value);
  };
  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: state.tag, onkeyup: onEditTag }),
    m("div", [
      m("img", { src: state.image_url })
    ])
  ]);
}

