import { PS } from "patchinko/explicit"

export const actions = update => ({
  togglePrecipitations: value =>
    update({ conditions: PS({ precipitations: value }) }),

  changeSky: value =>
    update({ conditions: PS({ sky: value }) })
})
