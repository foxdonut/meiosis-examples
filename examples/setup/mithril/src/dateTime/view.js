import m from "mithril"
import b from "bss"
import { Button, TextField } from "polythene-mithril"

const getErrorMessage = (state, field) =>
  (state.errors && state.errors.dateTime && state.errors.dateTime[field]) || " "

export const DateTime = {
  view: ({ attrs: { context } }) => {
    const state = context.getState()

    return m(
      "div",
      m("label", "Date:"),
      m(TextField, {
        type: "date",
        value: state.date,
        events: {
          oninput: evt => context.actions.editDate(evt.target.value)
        },
        help: getErrorMessage(state, "date")
      }),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Hour:",
          value: state.hour,
          events: {
            oninput: evt => context.actions.editHour(evt.target.value)
          },
          help: getErrorMessage(state, "hour")
        })
      ),
      m(
        "div" + b.mt(4),
        m(TextField, {
          label: "Minute:",
          value: state.minute,
          events: {
            oninput: evt => context.actions.editMinute(evt.target.value)
          },
          help: getErrorMessage(state, "minute")
        })
      ),
      m(
        "div" + b.mt(8),
        m(Button, {
          label: "Validate",
          border: true,
          events: { onclick: () => context.actions.validate(context.root.get()) }
        }),
        m("span" + b.ml(8), state.message)
      )
    )
  }
}
