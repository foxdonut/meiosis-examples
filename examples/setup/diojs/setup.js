import { h, render } from "dio.js";
import { setup } from "../common";

global.jsx = h;

export const setupApp = () => setup(render);
