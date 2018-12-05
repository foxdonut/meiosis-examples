import { Component } from "preact"

import { model } from "../common/model"
import { actions } from "../common/actions"
import { view } from "../common/view.jsx"

export const app = {
  model,
  actions
}

export class App extends Component {
  componentWillMount() {
    this.props.models.map(model => {
      this.setState({ model })
    })
  }

  render() {
    const { model } = this.state
    const { actions } = this.props

    return view(model, actions)
  }
}
