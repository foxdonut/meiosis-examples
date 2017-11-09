import { safe, wrap } from "../handler";

const precipitationOption = ({ model, actions, id, value, label }) => (
  <span>
    <input type="radio" id={id} name="precipitation" value={value}
      checked={model.precipitation === value}
      onChange={safe(actions.changePrecipitation)}/>
    <label htmlFor={id}>{label}</label>
  </span>
);

export const createView = actions => model => (
  <div>
    <div>
      <input type="checkbox" checked={model.precipitations}
        onClick={safe(actions.togglePrecipitations)} id="precipitations"/>
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      {precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"})}
      {precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"})}
      {precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
    </div>
    <div>
      Date:
      <input type="text" size="10" value={model.date} onInput={safe(actions.editDate)}/>
    </div>
    <span>Temperature: </span>
    <span className="tempValue">{model.value}</span>
    &deg;
    <span className="tempUnits">{model.units}</span>
    <div>
      <button className="btn btn-default increase" onClick={wrap(actions.increase, 1)}>Increase</button>
      <button className="btn btn-default decrease" onClick={wrap(actions.increase, -1)}>Decrease</button>
    </div>
    <div>
      <button className="btn btn-primary changeUnits" onClick={safe(actions.changeUnits)}>Change Units</button>
    </div>
  </div>
);
