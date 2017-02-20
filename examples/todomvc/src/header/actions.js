import flyd from "flyd";

const ENTER_KEY = 13;

export const actions = {
  newTodo: flyd.stream(),
  saveNewTodo: flyd.stream()
};

export const intents = {
  newTodoKeyUp: evt => {
    if (evt.keyCode === ENTER_KEY) {
      actions.saveNewTodo(evt.target.value);
    }
    else {
      actions.newTodo(evt.target.value);
    }
  }
};

/*
onNewTodoKeyUpEnterOnly: function(evt) {
  if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
    actions.saveTodo(evt.target.value);
  }
},
onNewTodoChange: function(evt) {
  actions.newTodo(evt.target.value);
}
*/