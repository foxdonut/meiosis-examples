import { createView } from "domvm";
import { setup } from "../common";
import { mapKeys, sv } from "seview";

const h = sv(mapKeys({
  tag: "tag",
  attrs: "attrs",
  children: "body"
}));

export const setupRender = () => {
  return (view, element) => {
    const AppView = () => () => view;
    const vm = createView(AppView, {});
    vm.mount(element);
  };
};

export const setupApp = () => {
  const app = setup(() => null);

  const AppView = () => (vm, model) => h(app.view(model));

  const vm = createView(AppView, app.models());
  vm.mount(app.element);
  app.models.map(model => vm.update(model));

  return app;
};
