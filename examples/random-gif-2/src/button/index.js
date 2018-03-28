const m = require("mithril");
const b = require("bss").default;
const { lensPath, not, over } = require("ramda");

const toggle = update => () => update(over(lensPath(["active"]), not));

exports.createButton = update => ({
  model: () => ({
    active: false
  }),
  view: model => {
    const bc = model.active ? "green" : "red";
    const label = model.active ? "Active" : "Inactive";
    return m("button" + b.d("block").mt(4).p(8).w("8rem").br(".25rem").c("white"),
      { style: b.bc(bc).style, onclick: toggle(update) }, label);
  }
});
