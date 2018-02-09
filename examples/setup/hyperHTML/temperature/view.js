import { wire } from "hyperhtml/esm";
import { safe, wrap } from "../../common/handler";

const precipitationOption = ({ model, actions, id, value, label }) => wire()`
  <span>
    <input type="radio" id="${id}" name="precipitation" value="${value}"
      checked="${model.precipitation === value}"
      onclick=${safe(actions.changePrecipitation)}/>
    <label for="${id}">${label}</label>
  </span>
`;

export const createView = actions => model => {
    const w = wire(model);
    const el = w`
      <div>
        <div>
          <input type="checkbox" checked="${model.precipitations}"
            onclick=${safe(actions.togglePrecipitations)} id="precipitations"/>
          <label for="precipitations">Precipitations</label>
        </div>
        <div>
          ${precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"})}
          ${precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"})}
          ${precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
        </div>
        <div>
          Date:
          <input type="text" size="10" oninput=${safe(actions.editDate)}/>
        </div>
        <span>Temperature: </span>
        <span class="tempValue">${model.value}</span>&deg;<span class="tempUnits">${model.units}</span>
        <div>
          <button class="btn btn-default increase" onclick=${wrap(actions.increase, 1)}>Increase</button>
          <button class="btn btn-default decrease" onclick=${wrap(actions.increase, -1)}>Decrease</button>
        </div>
        <div>
          <button class="btn btn-primary changeUnits" onclick=${safe(actions.changeUnits)}>Change Units</button>
        </div>
      </div>
    `;

    if (!w.default) {
        w.default = model.date;
        el.querySelector("input[type=text]").value = model.date;
    }
    return el;
};
