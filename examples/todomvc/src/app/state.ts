import { Model } from "../util";

const allCompleted = (viewModel: any) => {
  let result = true;

  for (let i = 0, t = viewModel.todoIds.length; i < t; i++) {
    if (!viewModel.todosById[viewModel.todoIds[i]].completed) {
      result = false;
      break;
    }
  }
  return result;
};

export const state = (model: Model) => {
  const viewModel = JSON.parse(JSON.stringify(model));

  viewModel.allSelected = model.filterBy === "";
  viewModel.activeSelected = model.filterBy === "active";
  viewModel.completedSelected = model.filterBy === "completed";

  viewModel.allCompleted = allCompleted(viewModel);

  const notCompleted = (todoId: string) => !viewModel.todosById[todoId].completed;
  const itemsLeft = viewModel.todoIds.filter(notCompleted).length;

  viewModel.itemsLeftText = itemsLeft > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";

  viewModel.clearCompletedVisible = (viewModel.todoIds.length - itemsLeft) > 0;

  return viewModel;
};
