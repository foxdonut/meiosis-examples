import React from "react"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  initial: {
    dateTime: dateTime.initial,
    conditions: conditions.initial,
    "temperature:air": temperature.initial,
    "temperature:water": temperature.initial
  },

  Actions: update =>
    Object.assign(
      {},
      conditions.Actions(update),
      dateTime.Actions(update),
      temperature.Actions(update)
    )
}

export const App = ({ states, actions }) => {
  const [init, setInit] = React.useState(false)
  const [state, setState] = React.useState(states())

  if (!init) {
    setInit(true)
    states.map(setState)
  }

  return (
    <div>
      <DateTime state={state} id="dateTime" actions={actions} />
      <Conditions state={state} id="conditions" actions={actions} />
      <Temperature state={state} id="temperature:air" actions={actions} />
      <Temperature state={state} id="temperature:water" actions={actions} />
    </div>
  )
}
