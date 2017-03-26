export const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

export const model = () => ({
  todo: emptyTodo(),
  validationErrors: {}
});
