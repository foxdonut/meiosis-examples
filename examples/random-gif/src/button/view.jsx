import React from "react";
import classnames from "classnames";

export function view(state, actions) {
  const onToggleButton = evt => {
    evt.preventDefault();
    actions.toggleButton();
  };
  const classes = classnames({ "btn": true, "btn-primary": state.active, "btn-danger": !state.active });
  const label = state.active ? "Active" : "Inactive";
  return (<button className={classes} onClick={onToggleButton}>{label}</button>);
}
