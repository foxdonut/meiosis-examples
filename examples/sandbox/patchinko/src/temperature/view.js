import m from "mithril";

const marginRight = {
  "margin-right": "4px"
};

export const createView = actions => model =>
  m(".pure-control-group",
    m("label", model.label),
    m("span", { style: marginRight }, model.value),
    m("button.pure-button", { onclick: actions.changeUnits, style: marginRight },
      m.trust("&deg;"), model.units),
    m("button.pure-button", { onclick: actions.increase( 1), style: marginRight }, "+"),
    m("button.pure-button", { onclick: actions.increase(-1) }, "-")
  );
