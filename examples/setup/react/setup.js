import React from "react";
import ReactDOM from "react-dom";
import { setup } from "../common";

export const setupApp = () => {
  global.jsx = React.createElement;
  return setup(ReactDOM.render);
};
