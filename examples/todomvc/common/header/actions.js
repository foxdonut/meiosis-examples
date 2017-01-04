import Type from "union-type";

export const HeaderAction = Type({
  NewTodo: [ String ],
  SaveNewTodo: [ String ],
  ClearNewTodo: []
});

export const headerActions = propose => {
  const actions = {
    newTodo: function(title) {
      propose(HeaderAction.NewTodo(title));
    },
    saveTodo: function(title) {
      propose(HeaderAction.SaveNewTodo(title));
    },
    clearNewTodo: function() {
      propose(HeaderAction.ClearNewTodo());
    }
  };

  const ENTER_KEY = 13;

  actions.events = {
    onNewTodoKeyUp: function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
      else {
        actions.newTodo(evt.target.value);
      }
    },
    onNewTodoKeyUpEnterOnly: function(evt) {
      if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    },
    onNewTodoChange: function(evt) {
      actions.newTodo(evt.target.value);
    }
  };

  return actions;
};
