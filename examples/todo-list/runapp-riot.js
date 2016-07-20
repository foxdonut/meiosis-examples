import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-riot";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-riot";
import { model } from "./todoMain/model";

export default function() {
  const renderRoot = run(renderer(model, "root"), todoMainComponent());
  meiosisTracer(createComponent, renderRoot, "#tracer");

  return new Vue({
    el: "#app",
    data: model,
    template: "<div><div is='todo-main' :root='root'></div></div>"
  });
}
