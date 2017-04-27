import m from "mithril";
import stream from "mithril/stream";

import { app } from "./app";

const applyUpdate = (model, modelUpdate) => modelUpdate(model);

const initialModel = app.model();

const update = stream();
const model = stream.scan(applyUpdate, initialModel, update);

const view = app.create(update);

const element = document.getElementById("app");
model.map(model => m.render(element, view(model)));
