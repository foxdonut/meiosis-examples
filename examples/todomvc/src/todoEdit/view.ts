import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { Todo } from "../util";

export const createView = (actions: any) => (todo: Todo) =>
  h("input.edit", {
    attrs: { type: "text" },
    hook: {
      insert: (vnode: VNode) => {
        const elm: HTMLInputElement = (vnode.elm as HTMLInputElement);
        elm.focus();
        elm.selectionStart = elm.value.length;
      }
    },
    on: { keyup: actions.editKeyUp(todo.id), blur: actions.editBlur(todo.id) },
    props: { value: todo.title }
  });
