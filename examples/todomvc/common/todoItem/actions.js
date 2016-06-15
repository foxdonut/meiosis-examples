/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.actions = function(sendUpdate) {
    var actions = {
      saveTodo: function(title, id) {
        sendUpdate({ saveTodo: { title: title, id: id } });
      },
      editTodo: function(title, id) {
        sendUpdate({ editTodo: { title: title, id: id } });
      },
      cancelEdit: function() {
        sendUpdate({ editTodo: { } });
      },
      deleteTodoId: function(todoId) {
        sendUpdate({ deleteTodoId: todoId });
      },
      setCompleted: function(todoId, completed) {
        sendUpdate({ setCompleted: { id: todoId, completed: completed } });
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
      },
      onToggleTodo: function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      },
      onEditTodo: function(todo) {
        return function(_evt) {
          actions.editTodo(todo.title, todo.id);
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
})(window);
