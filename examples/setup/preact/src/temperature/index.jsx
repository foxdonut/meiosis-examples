import { h, Component } from "preact"
import Button from "preact-material-components/Button"
import Formfield from "preact-material-components/FormField"

import "preact-material-components/Button/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const temperature = {
  initialState,
  actions
}

export class Temperature extends Component {
  render() {
    const { local } = this.props

    return (
      <div>
        <div style={{ marginTop: "0.8rem" }}>
          <Formfield>
            <label>
              {local.state.label} Temperature: {local.state.value}&deg;{local.state.units}
            </label>
          </Formfield>
        </div>
        <div style={{ marginTop: "0.8rem" }}>
          <Button
            raised
            onClick={() => local.update(actions.increment(1))}
            style={{ marginRight: "0.4rem" }}
          >
            Increment
          </Button>
          <Button
            raised
            onClick={() => local.update(actions.increment(-1))}
            style={{ marginRight: "0.4rem" }}
          >
            Decrement
          </Button>
          <Button outlined onClick={() => local.update(actions.changeUnits())}>
            Change Units
          </Button>
        </div>
      </div>
    )
  }
}
