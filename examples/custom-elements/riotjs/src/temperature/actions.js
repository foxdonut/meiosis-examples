export const Actions = cell => ({
  increment: amount => cell.update({ value: x => x + amount }),

  changeUnits: () => {
    cell.update(temperature => {
      const [units, value] =
        temperature.units === "C"
          ? ["F", Math.round((temperature.value * 9) / 5 + 32)]
          : ["C", Math.round(((temperature.value - 32) / 9) * 5)]

      return { ...temperature, units, value }
    })
  }
})
