export const service = state => {
  if (state.eventId === "newGifGenerated") {
    const increment = state.counter.value > 3 && state.button.active ? 2 : 1
    return { counter: { value: x => x + increment }, eventId: undefined }
  }
}
