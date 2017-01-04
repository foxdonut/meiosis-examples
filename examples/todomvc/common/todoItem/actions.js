import Type from "union-type";

export const ItemAction = Type({
  SetCompleted: [ Number, Boolean ],
  EditTodo: [ Object ],
  DeleteTodo: [ Number ]
});

export const itemActions = propose => {
  const actions = {
    setCompleted: function(todoId, completed) {
      propose(ItemAction.SetCompleted(todoId, completed));
    },
    editTodo: function(todo) {
      propose(ItemAction.EditTodo(todo));
    },
    deleteTodoId: function(todoId) {
      propose(ItemAction.DeleteTodo(todoId));
    }
  };

  actions.events = {
    onToggleTodo: function(todoId) {
      return function(evt) {
        actions.setCompleted(todoId, evt.target.checked);
      };
    },
    onEditTodo: function(todo) {
      return function(_evt) {
        actions.editTodo(todo);
      };
    },
    onDestroyTodo: function(todoId) {
      return function(_evt) {
        actions.deleteTodoId(todoId);
      };
    }
  };

  return actions;
};
