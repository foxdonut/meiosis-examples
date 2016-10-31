import app from "./app";
import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";
import todoMainComponent from "./todoMain/component-react";

const runapp = () => {
  const renderRoot = run({ renderer: renderer().intoId(document, "app"), rootComponent: todoMainComponent() });
  meiosisTracer(createComponent, renderRoot, "#tracer");
};

app(runapp);
