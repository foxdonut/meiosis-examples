import { Col, Row, Table } from "antd";
import h from "../util/jsnox-react";
import { todoItemActionsView } from "../todoItem/view-react";

const columns = [
  { title: "Priority", key: "priority", dataIndex: "priority" },
  { title: "Description", key: "description", dataIndex: "description" },
  { title: "Action", key: "action", render: todoItemActionsView }
];

const rowClassName = (_record, index) => index % 2 === 0 ? "even" : "odd";

export const todoListView = model =>
  h(Row, { key: "list" },
    h(Col, { span: 24 },
      h("div", "Todo List: " + model.message),
      h(Table, { dataSource: model.todos, columns, rowClassName, rowKey: "id", bordered: true })
    )
  );
