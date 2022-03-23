export const Actions = update => ({
  togglePrecipitations: value => update({ precipitations: value }),

  changeSky: value => update({ sky: value })
})
