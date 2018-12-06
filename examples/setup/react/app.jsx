import { Component } from "react"

import { model } from "../common/model"
import { actions } from "../common/actions"
import { view } from "../common/view.jsx"

export const app = {
  model,
  actions
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { model: props.models() }
    this.skippedFirst = false
  }

  render() {
    const { model } = this.state
    const { actions } = this.props

    return view(model, actions)
  }

  componentDidMount() {
    this.props.models.map(model => {
      if (this.skippedFirst) {
        this.setState({ model })
      }
      else {
        this.skippedFirst = true
      }
    })
  }
}
