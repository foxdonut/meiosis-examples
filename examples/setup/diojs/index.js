import { h, render } from "dio.js";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxDio = jsx({ });

window.jsx = jsxDio(h);

setup(render);
