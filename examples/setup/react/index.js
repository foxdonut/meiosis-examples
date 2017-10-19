import React from "react";
import ReactDOM from "react-dom";
import { setup } from "../common";

window.jsx = React.createElement;
setup(ReactDOM.render);
