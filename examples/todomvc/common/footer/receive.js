import { FooterAction } from "./actions";

export const receive = todoStorage => (model, proposal) => {
  FooterAction.case({
    ClearCompleted: function() {
      model.todos = todoStorage.clearCompleted();
    },
    Filter: function(by) {
      if (by !== model.filter) {
        model.todos = todoStorage.loadAll();
        model.filter = by;
      }
    }
  }, proposal);

  return model;
};
