const requestLoadList = next => () => {
  next({message: "Loading...", requestLoadList: true});
};

const loadList = next => () => {
  next({loadList: true});
};

const editTodo = next => (todo) => {
  next({todo});
};

const deleteTodo = next => (id) => {
  next({deleteTodo: {id}});
};

// FIXME
const createActions = (next) => ({
  requestLoadList: requestLoadList(next),
  loadList: loadList(next),
  editTodo: editTodo(next),
  deleteTodo: deleteTodo(next)
});

export { createActions };
