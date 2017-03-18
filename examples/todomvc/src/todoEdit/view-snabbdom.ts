import h from "snabbdom/h";

import { intents } from "./actions";

export const todoEditView = todo =>
  h("input.edit", {
    attrs: { type: "text" },
    props: { value: todo.title },
    on: { keyup: intents.editKeyUp(todo.id), blur: intents.editBlur(todo.id) },
    hook: {
      insert: function(vnode) {
        vnode.elm.focus();
        vnode.elm.selectionStart = vnode.elm.value.length;
      }
    }
  });
