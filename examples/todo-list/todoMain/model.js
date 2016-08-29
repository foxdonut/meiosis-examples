const initialModel = () => ({
  store: {
    todos: [],
    message: "Initializing...",
    todo: {
      id: "",
      priority: "",
      description: ""
    },
    validationErrors: {}
  }
});

const model = initialModel();

export { initialModel, model };
