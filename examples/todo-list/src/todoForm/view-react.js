import { Button, Col, Form, Input, Row } from "antd";
import h from "../util/jsnox-react";
import { intents } from "./actions";

const { Item } = Form;

const inputField = (name, value) =>
  h(Input, { value, onChange: intents.editingTodo(name) });

const inputDiv = (model, field, label) => {
  const errors = model.validationErrors[field];
  const error = errors && errors[0];

  return h(Item, { label, help: error, validateStatus: error ? "error" : "" },
    inputField(field, model.todo[field]));
};

export const todoFormView = model =>
  h(Row, { key: "form" },
    h(Col, { span: 12 },
      h(Form, {},
        inputDiv(model, "priority", "Priority:"),
        inputDiv(model, "description", "Description:"),
        h("div",
          h(Button, { type: "primary", onClick: intents.saveTodo(model.todo) }, "Save"),
          h(Button, { onClick: intents.clearForm }, "Cancel")
        )
      )
    )
  );
