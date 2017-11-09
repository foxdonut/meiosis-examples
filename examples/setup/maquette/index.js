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

global.jsx = jsxMaquette(h);

const { models, view, element } = setup(() => null);

const projector = createProjector();
projector.append(element, () => view(models()));
models.map(() => projector.scheduleRender());
