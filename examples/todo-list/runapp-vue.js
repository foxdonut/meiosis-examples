import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-vue";
//import TodoMain from "./todoMain/component.vue";
import model from "./todoMain/model";
import Vue from "vue";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const renderRoot = Meiosis.run(todoMainComponent(createComponent));
  meiosisTracer(createComponent, renderRoot, "#tracer");

  return new Vue({
    el: "#app",
    data: {model: model},
    template: `<div><div is="todo-main" :model="model"></div></div>`
  });
}
