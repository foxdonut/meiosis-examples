import { Col, Row, Table } from "antd";
import h from "../util/jsnox-react";
import { view as todoItemActionsView } from "../todoItem/view-react";

const columns = (update, events) => [
  { title: "Priority", key: "priority", dataIndex: "priority" },
  { title: "Description", key: "description", dataIndex: "description" },
  { title: "Action", key: "action", render: todoItemActionsView(update, events) }
];

const rowClassName = (_record, index) => index % 2 === 0 ? "even" : "odd";

export const view = (model, update, events) =>
  h(Row, { key: "list" },
    h(Col, { span: 24 },
      h("div", "Todo List: " + model.message),
      h(Table, { dataSource: model.todos, columns: columns(update, events), rowClassName, rowKey: "id", bordered: true })
    )
  );
