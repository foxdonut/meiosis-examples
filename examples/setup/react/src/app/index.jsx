import React, { Component } from "react"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

export const app = {
  initialState: () => Object.assign({},
    dateTime.initialState(),
    conditions.initialState(),
    { air: temperature.initialState("Air") },
    { water: temperature.initialState("Air") }
  ),
  actions: update => Object.assign({},
    dateTime.actions(update),
    conditions.actions(update),
    temperature.actions(update)
  )
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.states()
  }

  componentDidMount() {
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
        <Temperature state={state} id="air" actions={actions} />
        <Temperature state={state} id="water" actions={actions} />
      </div>
    )
  }
}
