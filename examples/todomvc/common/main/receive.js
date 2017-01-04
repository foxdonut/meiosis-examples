import { MainAction } from "./actions";

export const createMainReceive = todoStorage => (model, proposal) => {
  MainAction.case({
    SetAllCompleted: function(completed) {
      model.todos = todoStorage.setAllCompleted(completed);
    }
  }, proposal);

  return model;
};
