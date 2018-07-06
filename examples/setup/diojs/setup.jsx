import { h, render } from "dio.js";
import { setup } from "../common/index.jsx";

export const setupRender = () => {
  global.jsx = h;
  return render;
};

export const setupApp = () => setup(setupRender());
