import m from "mithril";
import classnames from "classnames";
import { button } from "../../button";

export const buttonView = model => {
  const classes = classnames({ "btn": true, "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return (<button className={ classes } onclick={ button.intents.toggle }>{ label }</button>);
};
