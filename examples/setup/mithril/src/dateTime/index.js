import m from "mithril"
import b from "bss"
import { Button, TextField } from "polythene-mithril"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const dateTime = {
  initialState,
  actions
}

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

export const DateTime = {
  view: vnode => {
    const { state, actions } = vnode.attrs

    return (
      m("div",
        m(TextField, {
          label: "Date:",
          type: "date",
          value: state.dateTime.date,
          events: {
            oninput: evt => actions.editDate(evt.target.value)
          },
          help: getErrorMessage(state, "date")
        }),
        m("div" + b.mt(4),
          m(TextField, {
            label: "Hour:",
            value: state.dateTime.hour,
            events: {
              oninput: evt => actions.editHour(evt.target.value)
            },
            help: getErrorMessage(state, "hour")
          })
        ),
        m("div" + b.mt(4),
          m(TextField, {
            label: "Minute:",
            value: state.dateTime.minute,
            events: {
              oninput: evt => actions.editMinute(evt.target.value)
            },
            help: getErrorMessage(state, "minute")
          })
        ),
        m("div" + b.mt(8),
          m(Button, {
            label: "Validate", border: true,
            events: { onclick: () => actions.validate(state) }
          }),
          m("span" + b.ml(8), state.conditions.message)
        )
      )
    )
  }
}
