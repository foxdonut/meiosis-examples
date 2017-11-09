import { h, render } from "dio.js";
import { setup } from "../common";

export const setupApp = () => {
  global.jsx = h;
  return setup(render);
};
