// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const view = ({ todoForm, todoList }) => model => (
  <div>
    {todoForm(model, "todoForm")}
    {todoList(model)}
  </div>
);
