import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { Todo } from "../util";
import { actions } from "./actions";

export const view = (todo: Todo, update: Function) =>
  h("input.edit", {
    attrs: { type: "text" },
    props: { value: todo.title },
    on: { keyup: actions.editKeyUp(update, todo.id), blur: actions.editBlur(update, todo.id) },
    hook: {
      insert: function(vnode: VNode) {
        const elm: HTMLInputElement = (<HTMLInputElement> vnode.elm);
        elm.focus();
        elm.selectionStart = elm.value.length;
      }
    }
  });
