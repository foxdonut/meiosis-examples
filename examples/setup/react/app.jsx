import { Component } from "react"

import { initialState } from "../common/initialState"
import { actions } from "../common/actions"
import { view } from "../common/view.jsx"

export const app = {
  initialState,
  actions
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.states()
    this.skippedFirst = false
  }

  render() {
    const state = this.state
    const { actions } = this.props

    return view({ state, actions })
  }

  componentDidMount() {
    this.props.states.map(state => {
      if (this.skippedFirst) {
        this.setState(state)
      }
      else {
        this.skippedFirst = true
      }
    })
  }
}
