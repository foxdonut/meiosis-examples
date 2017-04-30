import React from "react";

export const createView = (update, components) => model => (
  <div>
    {components.header(model)}
    {components.home(model)}
    {components.footer(model)}
  </div>
);
