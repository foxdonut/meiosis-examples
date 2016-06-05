import React from "react";
import todoListConfig from "./todoList/main";
import todoFormConfig from "./todoForm/main";
import meiosisTracer from "meiosis-tracer";

export default function(Meiosis) {
  const createComponent = Meiosis.createComponent;

  const TodoList = createComponent(todoListConfig);
  const TodoForm = createComponent(todoFormConfig);

  const TodoMain = createComponent({
    view: model => (
      <div>
        <div id="tracer" style={{position: "fixed", top: "0px", right: "0px"}}></div>
        <TodoForm {...model}/>
        {TodoList(model)}
      </div>
    )
  });
  const renderRoot = Meiosis.run(TodoMain);
  meiosisTracer(createComponent, renderRoot, "#tracer");
}
