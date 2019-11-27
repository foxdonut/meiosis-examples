import m from "mithril"

export const Status = {
  view: ({ attrs: { state } }) => m("", state.status)
}
