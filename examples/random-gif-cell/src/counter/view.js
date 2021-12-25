import m from "mithril"

export const Counter = {
  view: ({ attrs: { context } }) =>
    m("div", context.getState().label + " " + context.getState().value)
}
