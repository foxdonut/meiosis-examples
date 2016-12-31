import React from "react";
import classnames from "classnames";

export const view = actions => model => {
  const onToggleButton = evt => {
    evt.preventDefault();
    actions.toggleButton();
  };
  const classes = classnames({ "btn": true, "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return (<button className={classes} onClick={onToggleButton}>{label}</button>);
}
