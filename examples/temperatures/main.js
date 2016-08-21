import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";

import temperature from "./temperature/main";

const mainComponent = createComponent(temperature);

const renderRoot = run(renderer().intoId(document, "app"), mainComponent);
meiosisTracer(createComponent, renderRoot, "#tracer");
