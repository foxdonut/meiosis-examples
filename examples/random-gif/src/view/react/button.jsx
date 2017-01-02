import React from "react";
import classnames from "classnames";
import { handlers } from "../../button";

export const view = model => {
  const classes = classnames({ "btn": true, "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return (<button className={classes} onClick={handlers.onToggleButton}>{label}</button>);
};
