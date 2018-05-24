import { html } from "lit-html/lib/lit-extended";
import { createTemperature } from "../temperature";
import { nest } from "../util";

const createTemperaturePair = update => {
  const air = nest(createTemperature("Air"), update, "air");
  const water = nest(createTemperature("Water"), update, "water");

  const model = () => Object.assign(air.model(), water.model());

  const view = model => html`<div>
    ${air.view(model)}
    ${water.view(model)}
  </div>`;

  const state = model =>
    Object.assign({}, air.state(model), water.state(model));

  return { model, view, state };
};

export const createApp = update => {
  return nest(createTemperaturePair, update, "temperatures");
};
