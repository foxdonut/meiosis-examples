export const Actions = update => ({
  buttonToggle: id => update({ [id]: { active: x => !x } })
})
