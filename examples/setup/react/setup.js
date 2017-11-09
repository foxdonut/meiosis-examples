import React from "react";
import ReactDOM from "react-dom";
import { setup } from "../common";

global.jsx = React.createElement;
export const setupApp = () => setup(ReactDOM.render);
