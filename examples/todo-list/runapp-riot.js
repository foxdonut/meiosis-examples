import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-riot";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-riot";

export default function() {
  const todoMain = todoMainComponent();
  const renderRoot = run(renderer("todo-main").intoId(document, "app"), todoMain);
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
