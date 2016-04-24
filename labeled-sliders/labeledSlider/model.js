const transform = Action => (model, action) => Action.case({
  Update: (index, value) => ({ index, value })
}, action);

export { transform };
