import React from "react";

const view = (todoForm, todoList) => model => (
  <div>
    {todoForm(model.root.todo)}
    {todoList(model.root)}
  </div>
);

export default view;
