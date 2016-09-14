import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-react";

export default function() {
  const renderRoot = run(renderer().intoId(document, "app"), todoMainComponent());
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
