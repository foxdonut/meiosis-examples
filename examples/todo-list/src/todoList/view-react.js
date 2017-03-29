import { Col, Row, Table } from "antd";
import h from "../util/jsnox-react";
import { todoItem } from "../todoItem/index-react";

const columns = (update, events) => {
  // FIXME: what about events and multiple instances of a component?
  const todoItemView = todoItem.create(update, events);

  return [
    { title: "Priority", key: "priority", dataIndex: "priority" },
    { title: "Description", key: "description", dataIndex: "description" },
    { title: "Action", key: "action", render: todoItemView }
  ];
};

const rowClassName = (_record, index) => index % 2 === 0 ? "even" : "odd";

export const view = (update, events) => model =>
  h(Row, { key: "list" },
    h(Col, { span: 24 },
      h("div", "Todo List: " + model.message),
      h(Table, { dataSource: model.todos, columns: columns(update, events), rowClassName, rowKey: "id", bordered: true })
    )
  );
