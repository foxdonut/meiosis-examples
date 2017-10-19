import { h, render } from "dio.js";
import { setup } from "../common";
import { jsxDio } from "../common/jsx";

window.jsx = jsxDio(h);

setup(render);
