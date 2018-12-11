import { html } from "lit-html"
/*
      insert: (vnode: VNode) => {
        const elm: HTMLInputElement = (vnode.elm as HTMLInputElement);
        elm.focus();
        elm.selectionStart = elm.value.length;
      }
    }
*/

export const view = (todo, actions) => html`
  <input class="edit"
    type="text"
    @keyup=${actions.editKeyUp(todo.id)}
    @blur=${actions.editBlur(todo.id)}
    .value=${todo.title}>
`
