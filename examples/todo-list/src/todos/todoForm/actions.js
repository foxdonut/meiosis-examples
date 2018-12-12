import { PS } from "patchinko/explicit"

export const actions = ({ update }) => ({
  editingTodo: (id, field, value) =>
    update({
      [id]: PS({ todo: PS({ [field]: value }) })
    })
})
