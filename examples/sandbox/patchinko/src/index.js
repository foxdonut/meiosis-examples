import stream from "mithril-stream";
import m from "mithril";
import { O } from "./util/overloaded";

import { createApp } from "./app";

const update = stream();
const app = createApp(update);
const models = stream.scan(O, app.model(), update);

const element = document.getElementById("app");
models.map(model => m.render(element, app.view(model)));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
trace({ update, dataStreams: [ models ], toUpdate: model => model });
meiosisTracer({ selector: "#tracer" });
