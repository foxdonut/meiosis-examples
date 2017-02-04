export const only = fn => evt => {
  evt.preventDefault();
  return fn(evt);
};
