import O from "patchinko/constant"

export const actions = {
  togglePrecipitations: ({ update }, value) => update({ conditions: O({ precipitations: value }) }),

  changeSky: ({ update }, value) => update({ conditions: O({ sky: value }) })
}
