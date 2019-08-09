export const Actions = update => ({
  buttonToggle: context => update(context.lens({ active: x => !x }))
})
