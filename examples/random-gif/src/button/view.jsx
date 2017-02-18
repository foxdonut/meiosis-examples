import m from "mithril";
import classnames from "classnames";
import { intents } from "./actions";

export const buttonView = model => {
  const classes = classnames({ "btn": true, "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return (<button className={ classes } onclick={ intents.toggle }>{ label }</button>);
};
