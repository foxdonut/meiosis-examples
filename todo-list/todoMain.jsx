import radio from "radio";
import { createTodoList } from "./todoList/main";

export default function(render, element) {
  createTodoList(render, element, radio("meiosis"));
}
