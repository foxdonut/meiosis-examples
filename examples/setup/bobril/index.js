import * as b from "bobril";
import { setup } from "../common";
import { jsxBobril } from "../common/jsx";

window.jsx = jsxBobril((tag, attrs, children) => (
  { tag, attrs, children }
));

const { models, view, element } = setup(() => null);

const View = b.createComponent({
  render: (ctx, me) => me.children = [view(models())]
});
b.init(() => [ View() ], element);

models.map(() => b.invalidate());
