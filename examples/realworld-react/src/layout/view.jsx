import React from "react";

export const createView = components => props => (
  <div>
    <components.Header model={props.model} />
    <props.Component model={props.model} />
    <components.Footer model={props.model} />
  </div>
);
