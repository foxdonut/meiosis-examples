import { Button, Col, Form, Input, Row } from "antd";
import h from "../util/jsnox-react";

const { Item } = Form;

const inputField = (update, actions, name, value) =>
  h(Input, { value, onChange: actions.editingTodo(update, name) });

const inputDiv = (model, update, actions, field, label) => {
  const errors = model.validationErrors[field];
  const error = errors && errors[0];

  return h(Item, { label, help: error, validateStatus: error ? "error" : "" },
    inputField(update, actions, field, model.todo[field]));
};

export const view = (update, events, actions) => model =>
  h(Row, { key: "form" },
    h(Col, { span: 12 },
      h(Form, {},
        inputDiv(model, update, actions, "priority", "Priority:"),
        inputDiv(model, update, actions, "description", "Description:"),
        h("div",
          h(Button, { type: "primary", onClick: actions.saveTodo(update, events, model.todo) }, "Save"),
          h(Button, { onClick: actions.clearForm(update)  }, "Cancel")
        )
      )
    )
  );
