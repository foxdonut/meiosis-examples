import { Button, Col, Form, Input, Row } from "antd";
import h from "../util/jsnox-react";
import { actions } from "./actions";

const { Item } = Form;

const inputField = (update, name, value) =>
  h(Input, { value, onChange: actions.editingTodo(update, name) });

const inputDiv = (model, update, field, label) => {
  const errors = model.validationErrors[field];
  const error = errors && errors[0];

  return h(Item, { label, help: error, validateStatus: error ? "error" : "" },
    inputField(update, field, model.todo[field]));
};

export const view = (model, update, events) =>
  h(Row, { key: "form" },
    h(Col, { span: 12 },
      h(Form, {},
        inputDiv(model, update, "priority", "Priority:"),
        inputDiv(model, update, "description", "Description:"),
        h("div",
          h(Button, { type: "primary", onClick: actions.saveTodo(update, model.todo) }, "Save"),
          h(Button, { onClick: actions.clearForm(update)  }, "Cancel")
        )
      )
    )
  );
