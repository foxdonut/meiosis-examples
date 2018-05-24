import { html } from "lit-html/lib/lit-extended";

let viewIndex = 1;

const precipitationOption = ({ model, actions, id, value, label, index }) => html`
  <span>
    <input type="radio" id="${id}" name="precipitation_${index}" value="${value}"
      checked="${model.precipitation === value}"
      onclick="${actions.changePrecipitation}"/>
    <label htmlFor="${id}">${label}</label>
  </span>
`;

export const createView = actions => {
  const index = viewIndex;
  viewIndex++;
  return model => html`
    <div>
      <div>
        <input type="checkbox" checked="${model.precipitations}"
          onclick="${actions.togglePrecipitations}" id="precipitations_${index}"/>
        <label htmlFor="precipitations_${index}">Precipitations</label>
      </div>
      <div>
        ${precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain", index})}
        ${precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow", index})}
        ${precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet", index})}
      </div>
      <div>
        Date:
        <input type="text" size="10" oninput="${actions.editDate}" value="${model.date}"/>
      </div>
      <span>${model.label} Temperature: </span>
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
};
