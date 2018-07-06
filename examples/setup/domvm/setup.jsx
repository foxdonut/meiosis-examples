import { createView, defineElement } from "domvm";
import { setup } from "../common/index.jsx";
import { jsx } from "../common/jsx";

export const jsxDomvm = jsx({
  "className": "class",
  "htmlFor": "for",
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxDomvm(defineElement);

  return (view, element) => {
    const AppView = () => () => view;
    const vm = createView(AppView, {});
    vm.mount(element);
  };
};

export const setupApp = () => {
  global.jsx = jsxDomvm(defineElement);

  const app = setup(() => null);

  const AppView = () => (vm, model) => app.view(model);

  const vm = createView(AppView, app.models());
  vm.mount(app.element);
  app.models.map(model => vm.update(model));

  return app;
};
