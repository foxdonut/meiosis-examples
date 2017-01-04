import m from "mithril";
//FIXME
const events = { onEditKeyUp: () => () => null, onEditBlur: () => () => null };

export const todoEdit = todo =>
  m("input.edit[type=text]", {
    value: todo.title,
    onkeyup: events.onEditKeyUp(todo.id),
    onblur: events.onEditBlur(todo.id),
    config: function(element) {
      element.focus();
      element.selectionStart = element.value.length;
    }
  });

export const noTodoInput = () => m("span");
