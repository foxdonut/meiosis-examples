import m from "mithril";
import { merge } from "ramda";

export const createView = (models, components) => ({
  oninit: vnode => models.map(model => vnode.state.model = model),

  view: vnode => {
    const model = vnode.state.model;
    const Component = vnode.attrs.component;
    const attrs = merge({ model }, vnode.attrs);

    return [
      m(components.Header, attrs),
      m(Component, attrs),
      m(components.Footer, attrs)
    ];
  }
});
