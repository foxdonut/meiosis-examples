import Inferno from "inferno";
import createElement from 'inferno-create-element';
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxInferno = jsx({
  "htmlFor": "for"
});

export const setupApp = () => {
  global.jsx = jsxInferno(createElement);
  return setup(Inferno.render);
};
