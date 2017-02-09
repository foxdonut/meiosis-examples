export const initialModel = () => ({
  active: false
});

export function modelChange(model) {
  model.active = !model.active;
  return model;
}
