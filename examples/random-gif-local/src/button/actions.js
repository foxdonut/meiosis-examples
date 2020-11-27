export const Actions = update => ({
  buttonToggle: local => update(local.patch({ active: x => !x }))
})
