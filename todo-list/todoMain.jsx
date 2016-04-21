import React from "react";
import meiosis from "meiosis";
import { createTodoList } from "./todoList/main";
import { createTodoForm } from "./todoForm/main";

export default function(render, element) {
  const adapters = {
    render: view => render(view, element)
  };
  const Meiosis = meiosis(adapters);
  const createComponent = Meiosis.createComponent;

  const TodoList = createTodoList(createComponent);
  const TodoForm = createTodoForm(createComponent);

  const TodoMain = createComponent({
    view: props => (
      <div>
        <TodoForm {...props}/>
        <TodoList {...props}/>
      </div>
    )
  });
  Meiosis.run(TodoMain);
}
