const createActions = (next, services) => ({
  requestLoadList: () => {
    next({message: "Loading...", requestLoadList: true});
  },

  loadList: () => {
    services.loadTodos.fork(null, next);
  },

  editTodo: (todo) => {
    next({todo});
  },

  deleteTodo: (id) => {
    next({deleteTodo: {id}});
  }
});

export { createActions };
