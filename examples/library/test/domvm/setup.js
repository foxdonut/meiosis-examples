import domvm from "domvm";

export const setupRender = element => view => {
  const AppView = () => () => view;
  const vm = domvm.createView(AppView, {});
  vm.mount(element);
};
