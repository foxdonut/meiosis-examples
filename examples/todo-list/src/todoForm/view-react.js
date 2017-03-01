import { Button, Form, Input } from "antd";
import h from "../util/jsnox-react";
import { intents } from "./actions";

const { Item } = Form;

export const todoFormView = model => {
  const inputField = (name, value) =>
    h(Input, { value, onChange: intents.editingTodo(name) });

  const errorMessage = errors => errors ?
    h("span.has-error", h("span.help-block", errors[0])) : null;

  const inputDiv = (field, label) =>
    h(Item, { label },
      inputField(field, model.todo[field]),
      errorMessage(model.validationErrors[field])
    );

  return h(Form,
    inputDiv("priority", "Priority:"),
    inputDiv("description", "Description:"),
    h("div",
      h(Button, { type: "primary", onClick: intents.saveTodo(model.todo) }, "Save"),
      h(Button, { onClick: intents.clearForm }, "Cancel")
    )
  );
};
