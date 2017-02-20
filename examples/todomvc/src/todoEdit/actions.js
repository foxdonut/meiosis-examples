import flyd from "flyd";

export const actions = {
  clearEdit: flyd.stream(),
  editingTodo: flyd.stream(),
  saveTodo: flyd.stream()
};

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export const intents = {
  editBlur: id => evt => actions.saveTodo({ id, title: evt.target.value }),
  editChange: id => evt => actions.editingTodo({ id, title: evt.target.value }),
  editKeyUp: id => evt => {
    if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
      actions.clearEdit(true);
    }
    else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      actions.saveTodo({ id, title: evt.target.value });
    }
    else {
      actions.editingTodo({ id, title: evt.target.value });
    }
  }
};
