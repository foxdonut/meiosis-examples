import Inferno from "inferno";
import createElement from 'inferno-create-element';
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxInferno = jsx({
  "htmlFor": "for"
});

window.jsx = jsxInferno(createElement);
setup(Inferno.render);
