import { mount } from "vidom";
import { setup } from "../common";
//import { jsxMithril } from "../common/jsx";

//window.jsx = jsxMithril(m);

setup((view, element) => mount(element, view));
