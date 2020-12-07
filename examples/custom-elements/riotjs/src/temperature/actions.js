export const Actions = update => ({
  increment: amount => update({ value: x => x + amount }),

  changeUnits: () => {
    update(temperature => {
      if (temperature.units === "C") {
        temperature.units = "F"
        temperature.value = Math.round((temperature.value * 9) / 5 + 32)
      } else {
        temperature.units = "C"
        temperature.value = Math.round(((temperature.value - 32) / 9) * 5)
      }
      return temperature
    })
  }
})
