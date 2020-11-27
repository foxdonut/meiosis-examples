export const meiosis = ({ stream, merge, app }) => {
  const update = stream()

  const runServices = startingState =>
    app.services.reduce((state, service) => merge(state, service(state)), startingState)

  const states = stream.scan(
    (state, patch) => runServices(merge(state, patch)),
    runServices(app.initial),
    update
  )

  const actions = app.Actions(update, states)

  return { states, update, actions }
}
