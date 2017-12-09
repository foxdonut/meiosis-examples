import { defineElement as el } from "domvm";

export const createView = components => model =>
  el("div", [
    components.operations.view(model),
    components.books.view(model)
  ]);
