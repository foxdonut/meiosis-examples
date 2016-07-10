import React from "react";

const view = (todoForm, todoList) => model => (
  <div>
    {todoForm(model.todo)}
    {todoList(model)}
  </div>
);

export default view;
