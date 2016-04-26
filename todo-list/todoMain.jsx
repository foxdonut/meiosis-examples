import React from "react";
import { createTodoList } from "./todoList/main";
import { createTodoForm } from "./todoForm/main";
import meiosisTracer from "meiosis-tracer";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const TodoList = createTodoList(createComponent);
  const TodoForm = createTodoForm(createComponent);
  const Tracer = meiosisTracer(createComponent, "tracer");

  const TodoMain = createComponent({
    view: props => (
      <div>
        <div id="tracer"></div>
        <Tracer {...props}/>
        <TodoForm {...props}/>
        <TodoList {...props}/>
      </div>
    )
  });
  Meiosis.run(TodoMain);
}
