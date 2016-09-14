const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

const initialModel = model => Object.assign(model, {
  todo: emptyTodo(),
  validationErrors: {}
});

export { initialModel, emptyTodo };
