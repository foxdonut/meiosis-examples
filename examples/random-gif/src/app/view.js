import m from "mithril";

export function view(components) {
  return function(state) {
    return m("div", [
      components.counter(state.counter),
      components.button(state.button),
      m(".row", [
        m(".col-md-4", [ components.randomGif1(state.randomGif1) ]),
        m(".col-md-4", [ components.randomGif2(state.randomGif2) ])
      ])
    ]);
  };
}
