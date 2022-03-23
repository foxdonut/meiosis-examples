import { h } from "preact"

import { temperature, Temperature } from "../temperature"

export const app = {
  initial: temperature.initial
}

export const App = ({ cell }) => (
  <div>
    <Temperature cell={cell} />
  </div>
)
