import _ from "lodash"

export const Actions = update => ({
  togglePrecipitations: (id, value) => update(state => _.set(state, [id, "precipitations"], value)),

  changeSky: (id, value) => update(state => _.set(state, [id, "sky"], value))
})
