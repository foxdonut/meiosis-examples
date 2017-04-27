import m from "mithril";

export const createView = (update, components) => {
  return model => [
    components.header(model),
    components.main(model),
    components.footer(model)
  ];
};
