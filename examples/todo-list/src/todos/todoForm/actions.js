import O from "patchinko/constant"

export const actions = ({ update }) => ({
  editingTodo: (id, field, value) =>
    update({
      [id]: O({ todo: O({ [field]: value }) })
    })
})
