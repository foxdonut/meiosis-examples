/*global window*/
(function(ref) {
  ref.header = ref.header || {};

  ref.header.actions = function(sendUpdate) {
    var actions = {
      newTodo: function(title) {
        sendUpdate({ newTodo: title });
      },
      saveNewTodo: function(title, id) {
        sendUpdate({ saveTodo: { title: title, id: id } });
      },
      clearInput: function() {
        sendUpdate({ newTodo: "" });
      }
    };

    var ENTER_KEY = 13;

    actions.events = {
      onNewTodoKeyUp: function(evt) {
        if (evt.keyCode === ENTER_KEY) {
          actions.saveNewTodo(evt.target.value);
        }
        else {
          actions.newTodo(evt.target.value);
        }
      },
      onNewTodoKeyUpEnterOnly: function(evt) {
        if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
          actions.saveNewTodo(evt.target.value);
        }
      },
      onNewTodoChange: function(evt) {
        actions.newTodo(evt.target.value);
      }
    };

    return actions;
  };
})(window);
