import _ from "lodash"

export const actions = {
  togglePrecipitations: value => state => _.set(state, ["conditions", "precipitations"], value),

  changeSky: value => state => _.set(state, ["conditions", "sky"], value)
}
