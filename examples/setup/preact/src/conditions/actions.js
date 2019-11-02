import _ from "lodash/fp"

export const Actions = update => ({
  togglePrecipitations: (id, value) => update(_.set([id, "precipitations"], value)),

  changeSky: (id, value) => update(_.set([id, "sky"], value))
})
