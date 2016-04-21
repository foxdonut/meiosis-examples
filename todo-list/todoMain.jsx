import meiosis from "meiosis";
import { createTodoList } from "./todoList/main";

export default function(render, element) {
  const adapters = {
    render: view => render(view, element)
  };
  const Meiosis = meiosis(adapters);
  Meiosis.run(createTodoList(Meiosis.createComponent));
}
