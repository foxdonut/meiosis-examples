export const service = state => {
  if (state.triggers.incrementCounter) {
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    return { counter: { value: x => x + increment }, triggers: { incrementCounter: undefined } }
  }
}
