// @ts-check
export const Actions = cell => ({
  buttonToggle: () => cell.update({ active: x => !x })
})
