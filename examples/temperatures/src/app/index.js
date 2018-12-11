import preact, { Component } from "preact"
import { actions } from "./actions"
import { entryDate, EntryDate } from "../entryDate"
import { entryNumber, EntryNumber } from "../entryNumber"
import { temperature, Temperature } from "../temperature"

export const app = {
  model: () => Object.assign({}, {
    "entry:date:from": entryDate.model("From Date:"),
    "entry:date:to": entryDate.model("From To:"),
    "entry:number": entryNumber.model(),
    "temperature:air": temperature.model("Air temperature"),
    "temperature:water": temperature.model("Water temperature")
  }),
  actions: update => Object.assign({},
    actions(update),
    temperature.actions(update)
  )
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.props.models.map(model => {
      this.setState({ model })
    })
  }

  render(props, state) {
    const actions = props.actions
    const model = state.model

    return (
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <EntryNumber id="entry:number" model={model} actions={actions}/>
          <EntryDate id="entry:date:from" model={model} actions={actions}/>
          <EntryDate id="entry:date:to" model={model} actions={actions}/>
          <Temperature id="temperature:air" model={model} actions={actions}/>
          <Temperature id="temperature:water" model={model} actions={actions}/>

          <button className="pure-button pure-button-primary"
            onClick={actions.save}>Save</button>
        </fieldset>

        <span>Saved: {model.saved}</span>
      </form>
    )
  }
}
