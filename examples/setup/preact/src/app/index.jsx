import { h, Component } from "preact"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  Initial: () => Object.assign({}, dateTime.Initial(), conditions.Initial(), temperature.Initial()),
  Actions: update =>
    Object.assign(
      {},
      conditions.Actions(update),
      dateTime.Actions(update),
      temperature.Actions(update)
    )
}

export class App extends Component {
  componentWillMount() {
    this.props.states.map(state => {
      this.setState(state)
    })
  }

  render() {
    const state = this.state
    const { actions } = this.props

    return (
      <div>
        <DateTime state={state} actions={actions} />
        <Conditions state={state} actions={actions} />
        <Temperature state={state} actions={actions} />
      </div>
    )
  }
}
