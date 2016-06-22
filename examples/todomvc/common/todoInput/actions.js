/*global window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.actions = function(sendUpdate) {
    var actions = {
      saveTodo: function(title, id) {
        sendUpdate({ saveTodo: { title: title, id: id } });
      },
      cancelEdit: function() {
        sendUpdate({ editTodo: { } });
      }
    };

    var ENTER_KEY = 13;
    var ESCAPE_KEY = 27;

    actions.events = {
      onEditKeyUp: function(todoId) {
        return function(evt) {
          if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
            actions.cancelEdit();
          }
          else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
            actions.saveTodo(evt.target.value, todoId);
          }
        };
      },
      onEditChange: function(todoId) {
        return function(evt) {
          actions.editTodo(evt.target.value, todoId);
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
})(window);
