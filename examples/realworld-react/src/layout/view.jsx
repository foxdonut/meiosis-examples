import React from "react";

export const createView = components => props => (
  <div>
    {components.Header(props.model)}
    {props.Component(props.model)}
    {components.Footer(props.model)}
  </div>
);
