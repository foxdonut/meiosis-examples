// The app service is aware of other services and translates events into triggers for those
// services. This allows for a single event to trigger multiple services. Each service then
// acts upon its trigger and resets it.
// In this example there is only one trigger, but we could put multiple triggers under
// the "triggers" property.
export const service = state => {
  if (state.events.newGifGenerated) {
    return { triggers: { incrementCounter: true }, events: { newGifGenerated: undefined } }
  }
}
