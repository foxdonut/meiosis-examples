import { h, createProjector } from "maquette";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxMaquette = jsx({
  "className": "class",
  "htmlFor": "for",
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

window.jsx = jsxMaquette(h);

let projector = null;
setup((view, element) => {
  if (!projector) {
    projector = createProjector();
    projector.append(element, () => view);
  }
  else {
    projector.scheduleRender();
  }
});
