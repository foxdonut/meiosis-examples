import React from "react";
import ReactDOM from "react-dom";
import { setup } from "../common";

export const setupRender = () => {
  global.jsx = React.createElement;
  return ReactDOM.render;
};

export const setupApp = () => setup(setupRender());
