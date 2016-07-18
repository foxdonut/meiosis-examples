import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-vue";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-vue";
import model from "./todoMain/model";
import Vue from "vue";

export default function() {
  const renderRoot = run(renderer(model, "model"), todoMainComponent());
  meiosisTracer(createComponent, renderRoot, "#tracer");

  return new Vue({
    el: "#app",
    data: model,
    template: "<div><div is='todo-main' :model='model'></div></div>"
  });
}
