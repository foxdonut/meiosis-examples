import _ from "lodash/fp"

export const Actions = update => ({
  increment: (id, amount) => update(state => _.update([id, "value"], x => x + amount, state)),

  changeUnits: id =>
    update(state =>
      state[id].units === "C"
        ? _.set(
            [id, "units"],
            "F",
            _.update([id, "value"], value => Math.round((value * 9) / 5 + 32), state)
          )
        : _.set(
            [id, "units"],
            "C",
            _.update([id, "value"], value => Math.round(((value - 32) / 9) * 5), state)
          )
    )
})
