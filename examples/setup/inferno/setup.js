import Inferno from "inferno";
import createElement from 'inferno-create-element';
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxInferno = jsx({
  "htmlFor": "for"
});

global.jsx = jsxInferno(createElement);
export const setupApp = () => setup(Inferno.render);
