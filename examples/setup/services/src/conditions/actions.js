export const actions = {
  togglePrecipitations: (cell, value) => cell.update({ conditions: { precipitations: value } }),

  changeSky: (cell, value) => cell.update({ conditions: { sky: value } })
}
