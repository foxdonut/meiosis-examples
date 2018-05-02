import { html } from "lit-html/lib/lit-extended";

const precipitationOption = ({ model, actions, id, value, label }) => html`
  <span>
    <input type="radio" id="${id}" name="precipitation" value="${value}"
      checked="${model.precipitation === value}"
      onclick="${actions.changePrecipitation}"/>
    <label htmlFor="${id}">${label}</label>
  </span>
`;

export const createView = actions => model => html`
  <div>
    <div>
      <input type="checkbox" checked="${model.precipitations}"
        onclick="${actions.togglePrecipitations}" id="precipitations"/>
      <label for="precipitations">Precipitations</label>
    </div>
    <div>
      ${precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"})}
      ${precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"})}
      ${precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
    </div>
    <div>
      Date:
      <input type="text" size="10" oninput="${actions.editDate}" value="${model.date}"/>
    </div>
    <span>Temperature: </span>
    <span class="tempValue">${model.value}</span>&deg;<span class="tempUnits">${model.units}</span>
    <span>${model.comment}</span>
    <div>
      <button class="btn btn-default increase" onclick="${actions.increase(1)}">Increase</button>
      <button class="btn btn-default decrease" onclick="${actions.increase(-1)}">Decrease</button>
    </div>
    <div>
      <button class="btn btn-primary changeUnits" onclick="${actions.changeUnits}">Change Units</button>
    </div>
  </div>
`;