import Type from "union-type";

export const FooterAction = Type({
  ClearCompleted: [ ],
  Filter: [ String ]
});

export const footerActions = propose => {
  const actions = {
    clearCompleted: function() {
      propose(FooterAction.ClearCompleted());
    },
    filter: function(by) {
      propose(FooterAction.Filter(by));
    }
  };

  actions.events = {
    onClearCompleted: function(_evt) {
      actions.clearCompleted();
    }
  };

  return actions;
};
