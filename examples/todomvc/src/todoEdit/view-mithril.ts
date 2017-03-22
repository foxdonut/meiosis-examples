import * as m from "mithril";

import { Todo } from "../util";
import { actions } from "./actions";

export const view = (todo: Todo, update: Function) =>
  m("input.edit", {
    type: "text",
    value: todo.title,
    onkeyup: actions.editKeyUp(update, todo.id), onblur: actions.editBlur(update, todo.id),
    oncreate: (vnode: any) => {
      vnode.dom.focus();
      vnode.dom.selectionStart = vnode.dom.value.length;
    }
  });
