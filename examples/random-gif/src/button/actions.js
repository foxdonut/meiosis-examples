import O from "patchinko/constant"

export const Actions = update => ({
  buttonToggle: context => update(context.lens({ active: O(x => !x) }))
})
