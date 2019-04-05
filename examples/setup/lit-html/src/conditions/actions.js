import O from "patchinko/constant"

export const actions = {
  togglePrecipitations: value => ({ conditions: O({ precipitations: value }) }),

  changeSky: value => ({ conditions: O({ sky: value }) })
}
