import React from "react";
import { createTodoList } from "./todoList/main";
import { createTodoForm } from "./todoForm/main";
import meiosisTracer from "meiosis-tracer";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const TodoList = createTodoList(createComponent);
  const TodoForm = createTodoForm(createComponent);

  const TodoMain = createComponent({
    view: model => (
      <div>
        <div id="tracer"></div>
        <TodoForm {...model}/>
        <TodoList {...model}/>
      </div>
    )
  });
  const renderRoot = Meiosis.run(TodoMain);
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
