import m from "mithril";
import classnames from "classnames";
import { toggle } from "./actions";

export const buttonView = (model, update) => {
  const classes = classnames({ "btn": true, "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return (<button className={ classes } onclick={ toggle(update) }>{ label }</button>);
};
