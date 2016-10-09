import * as React from "react";
const Type = require("union-type");
import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";

Type.check = false;

const rootComponent = createComponent({
  initialModel: {},
  view: () => React.createElement("div", null, "Hello")
});

run(renderer().intoId(document, "app"), rootComponent);
