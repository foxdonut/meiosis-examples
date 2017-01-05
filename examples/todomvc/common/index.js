import { run } from "meiosis";
import Type from "union-type";
import { todoStorage } from "./store";
import { createHeaderReceive } from "./header/receive";
import { createMainReceive } from "./main/receive";
import { createItemReceive } from "./todoItem/receive";
import { createEditReceive } from "./todoEdit/receive";
import { createFooterReceive } from "./footer/receive";
import { rootState } from "./root/state";

export function startApp() {
  Type.check = false;

  const initial = {
    editTodo: {},
    filter: "all",
    newTodo: "",
    todos: todoStorage.loadAll()
  };

  const headerReceive = createHeaderReceive(todoStorage);
  const mainReceive = createMainReceive(todoStorage);
  const itemReceive = createItemReceive(todoStorage);
  const editReceive = createEditReceive(todoStorage);
  const footerReceive = createFooterReceive(todoStorage);

  const receive = (model, proposal) => {
    [headerReceive, mainReceive, itemReceive, editReceive, footerReceive].forEach(
      fn => model = fn(model, proposal)
    );
    return model;
  };

  return run({
    initial,
    scanner: { model: receive },
    mappers: [
      { state: rootState }
    ]
  });
}
