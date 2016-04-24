import React from "react";
import { createTodoList } from "./todoList/main";
import { createTodoForm } from "./todoForm/main";

export default function(Meiosis) {
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
