import React from "react";

const view = (todoForm, todoList) => model => (
  <div>
    {todoForm(model.store)}
    {todoList(model.store)}
  </div>
);

export default view;
