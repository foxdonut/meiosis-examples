import m from "mithril";
import { merge } from "ramda";

export const createView = (models, components) => ({
  //oninit: vnode => models.map(model => vnode.state.model = model),
  oninit: vnode => { console.log("init"); models.map(model => vnode.state.model = model); },
  view: vnode => {
    const model = vnode.state.model;
    const attrs = merge(vnode.attrs, { model });
    console.log("attrs:", attrs);

    return [
      m(components.Header, attrs),
      m(components.Component, attrs),
      m(components.Footer, attrs)
    ];
  }
});
