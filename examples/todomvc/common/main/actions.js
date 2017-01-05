import Type from "union-type";

export const MainAction = Type({
  SetAllCompleted: [ Boolean ]
});

export const createMainActions = propose => {
  const actions = {
    setAllCompleted: function(completed) {
      propose(MainAction.SetAllCompleted(completed));
    }
  };

  actions.events = {
    onToggleAllTodos: function(evt) {
      actions.setAllCompleted(evt.target.checked);
    }
  };

  return actions;
};
