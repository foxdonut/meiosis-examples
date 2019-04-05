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
    const { root } = vnode.attrs

    return m(
      "div",
      m(TextField, {
        label: "Date:",
        type: "date",
        value: root.state.dateTime.date,
        events: {
          oninput: evt => root.update(actions.editDate(evt.target.value))
        },
        help: getErrorMessage(root.state, "date")
      }),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Hour:",
          value: root.state.dateTime.hour,
          events: {
            oninput: evt => root.update(actions.editHour(evt.target.value))
          },
          help: getErrorMessage(root.state, "hour")
        })
      ),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Minute:",
          value: root.state.dateTime.minute,
          events: {
            oninput: evt => root.update(actions.editMinute(evt.target.value))
          },
          help: getErrorMessage(root.state, "minute")
        })
      ),
      m(
        "div" + b.mt(8),
        m(Button, {
          label: "Validate",
          border: true,
          events: { onclick: () => root.update(actions.validate(root.state)) }
        }),
        m("span" + b.ml(8), root.state.conditions.message)
      )
    )
  }
}
