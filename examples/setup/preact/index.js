import preact from "preact";
import { setup } from "../common";

window.jsx = preact.h;

setup((view, element) => preact.render(view, element, element.lastElementChild));
