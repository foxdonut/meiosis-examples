export const actions = {
  increment: (cell, amount) => cell.update({ value: x => x + amount }),

  changeUnits: cell =>
    cell.update(
      cell.state.units === 'C'
        ? { units: 'F', value: value => Math.round((value * 9) / 5 + 32) }
        : { units: 'C', value: value => Math.round(((value - 32) / 9) * 5) }
    )
};
