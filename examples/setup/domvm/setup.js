import domvm from "domvm";
import { setup } from "../common";
import { jsx } from "../common/jsx";

export const jsxDomvm = jsx({
  "className": "class",
  "htmlFor": "for",
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

global.jsx = jsxDomvm(domvm.defineElement);

export const setupApp = () => {
  const app = setup(() => null);

  const AppView = () => (vm, model) => app.view(model);

  const vm = domvm.createView(AppView, app.models());
  vm.mount(app.element);
  app.models.map(model => vm.update(model));

  return app;
};
