import Inferno from "inferno";
import createElement from 'inferno-create-element';
import { setup } from "../common";
import { jsxInferno } from "../common/jsx";

window.jsx = jsxInferno(createElement);
setup(Inferno.render);
