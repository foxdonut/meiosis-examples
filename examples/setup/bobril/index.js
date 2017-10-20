import * as b from "bobril";
import { setup } from "../common";
//import { jsxMithril } from "../common/jsx";

//window.jsx = jsxMithril(m);

//setup((view, element) => m.render(element, view));
const element = document.getElementById("app");
/*
b.init(() => ({
  tag: "h2", children: "Hello, Bobril"
}), element);
*/
const View = b.createComponent({
  render: (ctx, me) => {
    console.log(ctx, me);
    me.children = [{
      tag: "h2", children: "Hello, Bobril"
    }];
  }
});
b.init(() => [ View() ], element);
/*
b.init((a, b, c) => {
  console.log(a, b, c);
  return {
    tag: "h2", children: "Hello, Bobril"
  };
}, element);
*/
setTimeout(() => {
  b.invalidate();
  console.log("invalidated")
}, 2000);
