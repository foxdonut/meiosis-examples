const initialModel = () => ({
  root: {
    todos: [],
    message: "Initializing...",
    todo: {
      id: "",
      priority: "",
      description: ""
    }
  }
});

const model = initialModel();

export { initialModel, model };
