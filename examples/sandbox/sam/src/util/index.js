const nestUpdate = (update, prop) => func =>
  update(model => {
    model[prop] = func(model[prop]);
    return model;
  });

export const nest = (create, update, prop) => {
  const component = create(nestUpdate(update, prop));
  const result = Object.assign({}, component);
  if (component.model) {
    result.model = () => ({ [prop]: component.model() });
  }
  if (component.view) {
    result.view = model => component.view(model[prop]);
  }
  if (component.state) {
    result.state = model => ({ [prop]: component.state(model[prop])});
  }
  return result;
};
