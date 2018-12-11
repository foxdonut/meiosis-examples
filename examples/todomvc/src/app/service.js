import _ from "lodash"

const allCompleted = model => {
  let result = true

  for (let i = 0, t = model.todoIds.length; i < t; i++) {
    if (!model.todosById[model.todoIds[i]].completed) {
      result = false
      break
    }
  }
  return result
}

const computeState = model => {
  const result = {}

  result.allSelected = model.filterBy === ""
  result.activeSelected = model.filterBy === "active"
  result.completedSelected = model.filterBy === "completed"

  result.allCompleted = allCompleted(model)

  const notCompleted = todoId => !model.todosById[todoId].completed
  const itemsLeft = model.todoIds.filter(notCompleted).length

  result.itemsLeftText = itemsLeft > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : ""

  result.clearCompletedVisible = (model.todoIds.length - itemsLeft) > 0

  return result
}

export const service = _currentModel => {
  return model => {
    const newState = computeState(model)
    return _.merge(model, newState)
  }
}
