export const editDateValue = (model, update) => evt => {
  model.value = evt.target.value;
  update(model);
};
