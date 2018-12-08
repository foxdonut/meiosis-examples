import O from "patchinko/constant"

import { validateModel } from "./validation"

export const actions = ({ update, effects }) => ({
  editingTodo: (id, field, value) => update({ [id]: O({ todo: O({ [field]: value }) }) }),

  onSaveTodo: (id, todo, model) => {
    const validationErrors = validateModel(todo)

    if (Object.keys(validationErrors).length === 0) {
      effects.saveTodo(id, todo, model)
    }
    else {
      update({ [id]: O({ validationErrors }) })
    }
  }
})
