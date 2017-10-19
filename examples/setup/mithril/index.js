import m from "mithril";
import { setup } from "../common";
import { jsxMithril } from "../common/jsx";

window.jsx = jsxMithril(m);

setup((view, element) => m.render(element, view));
