import { createView, defineElement } from "domvm";
import { setup } from "../common";
import { sv } from "seview";

const attrMappings = {
  "className": "class",
  "htmlFor": "for",
  "innerHTML": ".innerHTML"
};

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key];
      delete attrs[key];
      attrs[key.toLowerCase()] = value;
    }
    else {
      const to = attrMappings[key];
      if (to) {
        const value = attrs[key];
        delete attrs[key];
        attrs[to] = value;
      }
    }
  });
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? node
  : defineElement(node.tag, processAttrs(node.attrs), node.children || null)
);

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
