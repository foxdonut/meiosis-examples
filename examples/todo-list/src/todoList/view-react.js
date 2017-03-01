import { Table } from "antd";
import h from "../util/jsnox-react";

const columns = [
  { title: "Priority", dataIndex: "priority", key: "priority" },
  { title: "Description", dataIndex: "description", key: "description" }
  // Action
];

export const todoListView = model => {
  return h("div",
    h("div", "Todo List: " + model.message),
    h(Table, { dataSource: model.todos, columns })
  );
};
