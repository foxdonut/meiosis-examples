import { html } from "lit-html"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const app = {
  initialState,
  actions
}

const precipitationOption = ({ state, actions, id, value, label }) => html`
  <span>
    <input type="radio" id=${id} name="precipitation" value=${value}
      .checked=${state.precipitation === value}
      @click=${actions.changePrecipitation}/>
    <label for=${id}>${label}</label>
  </span>
`

export const App = ({ state, actions }) => html`
  <div>
    <div>
      <input type="checkbox" .checked=${state.precipitations}
        @click=${actions.togglePrecipitations} id="precipitations"/>
      <label for="precipitations">Precipitations</label>
    </div>
    <div>
      ${precipitationOption({ state, actions, id: "rain", value: "RAIN", label: "Rain"})}
      ${precipitationOption({ state, actions, id: "snow", value: "SNOW", label: "Snow"})}
      ${precipitationOption({ state, actions, id: "sleet", value: "SLEET", label: "Sleet"})}
    </div>
    <div>
      Date:
      <input type="text" size="10" @input=${actions.editDate} value=${state.date}>
    </div>
    <span>Temperature: </span>
    <span class="tempValue">${state.value}</span>&deg<span class="tempUnits">${state.units}</span>
    <div>
      <button class="btn btn-default increase" @click=${() => actions.increase( 1)}>Increase</button>
      <button class="btn btn-default decrease" @click=${() => actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button class="btn btn-primary changeUnits" @click=${actions.changeUnits}>Change Units</button>
    </div>
  </div>
`