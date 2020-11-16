export const Actions = update => ({
  togglePrecipitations: (id, value) => update({ [id]: { precipitations: value } }),

  changeSky: (id, value) => update({ [id]: { sky: value } })
})
