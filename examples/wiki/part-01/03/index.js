/* global ReactDOM */
import flyd from "flyd";
import { createTemperature } from "./temperature";

const update = flyd.stream();
const temperature = createTemperature(update);
const initialModel = temperature.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(temperature.view(model), element));
