import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { Todo } from "../util";
import { intents } from "./actions";

export const view = (todo: Todo) =>
  h("input.edit", {
    attrs: { type: "text" },
    props: { value: todo.title },
    on: { keyup: intents.editKeyUp(todo.id), blur: intents.editBlur(todo.id) },
    hook: {
      insert: function(vnode: VNode) {
        const elm: HTMLInputElement = (<HTMLInputElement> vnode.elm);
        elm.focus();
        elm.selectionStart = elm.value.length;
      }
    }
  });
