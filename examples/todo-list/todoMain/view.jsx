import React from "react";

const view = (todoForm, todoList) => model => (
  <div>
    {todoForm(model)}
    {todoList(model)}
  </div>
);

export default view;
