import React from "react";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const renderRoot = Meiosis.run(todoMainComponent(createComponent));
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
