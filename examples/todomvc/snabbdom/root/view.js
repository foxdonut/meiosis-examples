/*global meiosisSnabbdom */
(function(ref) {
  var h = meiosisSnabbdom.renderer.h;

  var info = h("footer.info", [
    h("p", "Double-click to edit a todo"),
    h("p", [h("span", "Meiosis - Snabbdom - Created by "), h("a", {props: {href: "http://twitter.com/foxdonut00"}}, "foxdonut00")]),
    h("p", [h("span", "Part of "), h("a", {props: {href: "http://todomvc.com"}}, "TodoMVC")])
  ]);

  ref.root = ref.root || {};

  ref.root.view = function(todoapp) {
    return h("div", [todoapp, info]);
  };
})(window);
