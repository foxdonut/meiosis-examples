import Type from "union-type";

export const EditAction = Type({
  EditingTodo: [ Object ],
  SaveTodo: [ Object ],
  ClearEdit: [ ]
});

export const editActions = propose => {
  const actions = {
    editingTodo: function(title, id) {
      propose(EditAction.EditingTodo({ title: title, id: id }));
    },
    saveTodo: function(title, id) {
      propose(EditAction.SaveTodo({ title: title, id: id }));
    },
    clearEdit: function() {
      propose(EditAction.ClearEdit());
    }
  };

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  actions.events = {
    onEditKeyUp: function(todoId) {
      return function(evt) {
        if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
          actions.clearEdit();
        }
        else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
          actions.saveTodo(evt.target.value, todoId);
        }
      };
    },
    onEditChange: function(todoId) {
      return function(evt) {
        actions.editingTodo(evt.target.value, todoId);
      };
    },
    onEditBlur: function(todoId) {
      return function(evt) {
        actions.saveTodo(evt.target.value, todoId);
      };
    }
  };

  return actions;
};
