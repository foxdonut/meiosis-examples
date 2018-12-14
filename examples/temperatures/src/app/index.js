import { h, Component } from "preact"
import { actions } from "./actions"
import { entryDate, EntryDate } from "../entryDate"
import { entryNumber, EntryNumber } from "../entryNumber"
import { temperature, Temperature } from "../temperature"

export const app = {
  initialState: () => Object.assign({}, {
    "entry:date:from": entryDate.initialState("From Date:"),
    "entry:date:to": entryDate.initialState("From To:"),
    "entry:number": entryNumber.initialState(),
    "temperature:air": temperature.initialState("Air temperature"),
    "temperature:water": temperature.initialState("Water temperature")
  }),
  actions: update => Object.assign({},
    actions(update),
    temperature.actions(update)
  )
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.props.states.map(state => {
      this.setState(state)
    })
  }

  render(props, state) {
    const actions = props.actions

    return (
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <EntryNumber id="entry:number" state={state} actions={actions}/>
          <EntryDate id="entry:date:from" state={state} actions={actions}/>
          <EntryDate id="entry:date:to" state={state} actions={actions}/>
          <Temperature id="temperature:air" state={state} actions={actions}/>
          <Temperature id="temperature:water" state={state} actions={actions}/>

          <button className="pure-button pure-button-primary"
            onClick={actions.save}>Save</button>
        </fieldset>

        <span>Saved: {state.saved}</span>
      </form>
    )
  }
}
