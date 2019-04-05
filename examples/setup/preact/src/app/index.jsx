import { h, Component } from "preact"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"
import { lensProp } from "../util"

export const app = {
  initialState: () =>
    Object.assign(
      {},
      dateTime.initialState(),
      conditions.initialState(),
      { air: temperature.initialState("Air") },
      { water: temperature.initialState("Water") }
    )
}

export class App extends Component {
  componentWillMount() {
    this.props.states.map(state => {
      this.setState(state)
    })
  }

  render() {
    const root = { state: this.state, update: this.props.update }

    return (
      <div>
        <DateTime root={root} />
        <Conditions root={root} />
        <Temperature root={root} local={lensProp(root, "air")} />
        <Temperature root={root} local={lensProp(root, "water")} />
      </div>
    )
  }
}
