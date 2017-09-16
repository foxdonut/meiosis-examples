export const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

export const merge = source => target => Object.assign(target, source);
