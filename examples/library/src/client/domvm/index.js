import domvm from "domvm";
import { createApp } from "../app";

createApp(() => null).then(app => {
  const AppView = () => (vm, model) => app.view(model);

  const vm = domvm.createView(AppView, app.models());
  vm.mount(app.element);
  app.models.map(model => vm.update(model));
});
