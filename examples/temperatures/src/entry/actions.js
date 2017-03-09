export const editEntryValue = (model, update) => evt => {
  model.value = evt.target.value;
  update(model);
};
