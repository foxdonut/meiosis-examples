import m from "mithril"
import b from "bss"
import { Button, TextField } from "polythene-mithril"

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

export const DateTime = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div",
      m(TextField, {
        label: "Date:",
        type: "date",
        value: state[id].date,
        events: {
          oninput: evt => actions.editDate(id, evt.target.value)
        },
        help: getErrorMessage(state, "date")
      }),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Hour:",
          value: state[id].hour,
          events: {
            oninput: evt => actions.editHour(id, evt.target.value)
          },
          help: getErrorMessage(state, "hour")
        })
      ),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Minute:",
          value: state[id].minute,
          events: {
            oninput: evt => actions.editMinute(id, evt.target.value)
          },
          help: getErrorMessage(state, "minute")
        })
      ),
      m(
        "div" + b.mt(8),
        m(Button, {
          label: "Validate",
          border: true,
          events: { onclick: () => actions.validate(state) }
        }),
        m("span" + b.ml(8), state.message)
      )
    )
}
