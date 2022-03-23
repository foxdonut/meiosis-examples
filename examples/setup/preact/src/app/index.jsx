import { h } from "preact"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  initial: {
    dateTime: dateTime.initial,
    conditions: conditions.initial,
    temperature: {
      air: temperature.initial,
      water: temperature.initial
    }
  }
}

export const App = ({ cell }) => (
  <div>
    <DateTime cell={cell.nest("dateTime")} />
    <Conditions cell={cell.nest("conditions")} />
    <Temperature cell={cell.nest("temperature").nest("air")} />
    <Temperature cell={cell.nest("temperature").nest("water")} />
  </div>
)
