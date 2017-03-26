import { Button, Col, Form, Input, Row } from "antd";
import h from "../util/jsnox-react";

const { Item } = Form;

const inputField = (actions, name, value) =>
  h(Input, { value, onChange: actions.editingTodo(name) });

const inputDiv = (model, actions, field, label) => {
  const errors = model.validationErrors[field];
  const error = errors && errors[0];

  return h(Item, { label, help: error, validateStatus: error ? "error" : "" },
    inputField(actions, field, model.todo[field]));
};

export const view = actions => model =>
  h(Row, { key: "form" },
    h(Col, { span: 12 },
      h(Form, {},
        inputDiv(model, actions, "priority", "Priority:"),
        inputDiv(model, actions, "description", "Description:"),
        h("div",
          h(Button, { type: "primary", onClick: actions.saveTodo(model.todo) }, "Save"),
          h(Button, { onClick: actions.clearForm()  }, "Cancel")
        )
      )
    )
  );
