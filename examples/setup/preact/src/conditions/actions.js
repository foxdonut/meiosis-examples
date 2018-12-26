export const actions = update => ({
  togglePrecipitations: value =>
    update(state => {
      state.conditions.precipitations = value
      return state
    }),

  changeSky: value =>
    update(state => {
      state.conditions.sky = value
      return state
    })
})
