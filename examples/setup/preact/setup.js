import preact from "preact";
import { setup } from "../common";

global.jsx = preact.h;

export const setupApp = () => setup((view, element) => preact.render(view, element, element.lastElementChild));
