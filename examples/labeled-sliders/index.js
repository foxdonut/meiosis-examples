import Type from "union-type";
import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-snabbdom";
import { component as sliderContainer } from "./sliderContainer";

Type.check = false;

const rootComponent = createComponent(sliderContainer());
run({ renderer: renderer().intoId(document, "app"), rootComponent });
