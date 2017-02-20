import m from "mithril";

const onEditKeyUp = () => null;
const onEditBlur = () => null;

export const todoEditView = todo =>
  m("input.edit[type=text]", {
    value: todo.title,
    onkeyup: onEditKeyUp(todo.id),
    onblur: onEditBlur(todo.id),
    oncreate: function(vnode) {
      vnode.dom.focus();
      vnode.dom.selectionStart = vnode.dom.value.length;
    }
  });
