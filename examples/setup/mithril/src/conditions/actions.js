export const Actions = update => ({
  togglePrecipitations: value => update({ conditions: { precipitations: value } }),

  changeSky: value => update({ conditions: { sky: value } })
})
