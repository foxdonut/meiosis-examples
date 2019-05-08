import O from "patchinko/constant"

export const Actions = update => ({
  togglePrecipitations: value => update({ conditions: O({ precipitations: value }) }),

  changeSky: value => update({ conditions: O({ sky: value }) })
})
