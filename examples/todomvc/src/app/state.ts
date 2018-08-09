const flyd = require("flyd");
import * as _ from "lodash";
import { Model } from "../util";

const allCompleted = (model: Model) => {
  let result = true;

  for (let i = 0, t = model.todoIds.length; i < t; i++) {
    if (!model.todosById[model.todoIds[i]].completed) {
      result = false;
      break;
    }
  }
  return result;
};

const computeState = (model: Model) => {
  const result: any = {};

  result.allSelected = model.filterBy === "";
  result.activeSelected = model.filterBy === "active";
  result.completedSelected = model.filterBy === "completed";

  result.allCompleted = allCompleted(model);

  const notCompleted = (todoId: string) => !model.todosById[todoId].completed;
  const itemsLeft = model.todoIds.filter(notCompleted).length;

  result.itemsLeftText = itemsLeft > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";

  result.clearCompletedVisible = (model.todoIds.length - itemsLeft) > 0;

  return result;
};

export const state = (currentModel: Model) => {
  return (model: Model) => {
    const newState: any = computeState(model);
    return _.merge(model, newState);
  };
};
