const precipitationOption = ({ model, actions, id, value, label }) => (
  <span>
    <input type="radio" id={id} name="precipitation" value={value}
      checked={model.precipitation === value}
      onChange={actions.changePrecipitation}/>
    <label htmlFor={id}>{label}</label>
  </span>
);

export const createView = actions => model => (
  <div>
    <div>
      <input type="checkbox" checked={model.precipitations}
        onChange={actions.togglePrecipitations} id="precipitations"/>
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      {precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"})}
      {precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"})}
      {precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
    </div>
    <div>
      Date:
      <input type="text" size="10" value={model.date} onInput={actions.editDate}/>
    </div>
    <span>Temperature: {model.value}&deg;{model.units} </span>
    <div>
      <button className="btn btn-default" onClick={actions.increase(1)}>Increase</button>
      <button className="btn btn-default" onClick={actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button className="btn btn-primary" onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
);
