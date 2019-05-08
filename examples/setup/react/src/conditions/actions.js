import _ from "lodash"

export const Actions = update => ({
  togglePrecipitations: value =>
    update(state => _.set(state, ["conditions", "precipitations"], value)),

  changeSky: value => update(state => _.set(state, ["conditions", "sky"], value))
})
