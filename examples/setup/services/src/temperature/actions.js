export const actions = {
  increment: (cell, amount) => cell.update({ temperature: { value: (x) => x + amount } }),

  changeUnits: (cell) =>
    cell.update({
      temperature:
        cell.state.temperature.units === 'C'
          ? { units: 'F', value: (value) => Math.round((value * 9) / 5 + 32) }
          : { units: 'C', value: (value) => Math.round(((value - 32) / 9) * 5) }
    })
};
