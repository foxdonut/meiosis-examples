import React from "react"

const precipitationOption = ({ state, actions, id, value, label }) => (
  <span>
    <input type="radio" id={id} name="precipitation" value={value}
      checked={state.precipitation === value}
      onChange={actions.changePrecipitation}/>
    <label htmlFor={id}>{label}</label>
  </span>
)

export const view = ({ state, actions }) => (
  <div>
    <div>
      <input type="checkbox" checked={state.precipitations}
        onChange={actions.togglePrecipitations} id="precipitations"/>
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      {precipitationOption({ state, actions, id: "rain", value: "RAIN", label: "Rain"})}
      {precipitationOption({ state, actions, id: "snow", value: "SNOW", label: "Snow"})}
      {precipitationOption({ state, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
    </div>
    <div>
      Date:
      <input type="text" size="10" value={state.date} onChange={actions.editDate}/>
    </div>
    <span>Temperature: </span>
    <span className="tempValue">{state.value}</span>
    &deg;
    <span className="tempUnits">{state.units}</span>
    <div>
      <button className="btn btn-default increase" onClick={() => actions.increase( 1)}>Increase</button>
      <button className="btn btn-default decrease" onClick={() => actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button className="btn btn-primary changeUnits" onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
)
