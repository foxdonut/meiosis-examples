import m from "mithril";
import classnames from "classnames";
import { not } from "ramda";
import { modify } from "../util";

const toggle = update => () => update(modify("active", not));

export const button = {
  model: () => ({
    active: false
  }),
  create: update => model => {
    const classes = classnames({ "bg-green": model.active, "bg-gray": !model.active });
    const label = model.active ? "Active" : "Inactive";
    return m("button.white.ba.b--white.br2.pv1.ph2.link.w4", { class: classes, onclick: toggle(update) }, label);
  }
};
