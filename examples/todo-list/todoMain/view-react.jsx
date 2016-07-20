import React from "react";

const view = (todoForm, todoList) => model => (
  <div>
    {todoForm(model.store.todo)}
    {todoList(model.store)}
  </div>
);

export default view;
