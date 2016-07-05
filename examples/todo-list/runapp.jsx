import React from "react";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const todoMain = todoMainComponent(createComponent);

  const Root = createComponent({
    view: model => (
      <div>
        <div id="tracer" style={{position: "fixed", top: "0px", right: "0px"}}></div>
        {todoMain(model)}
      </div>
    )
  });
  const renderRoot = Meiosis.run(Root);
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
