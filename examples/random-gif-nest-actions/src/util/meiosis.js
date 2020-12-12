export const meiosis = ({ stream, merge, app }) => {
  const update = stream()

  const states = stream.scan((state, patch) => merge(state, patch), app.initial, update)

  const actions = app.Actions(update, states)

  return { states, update, actions }
}
