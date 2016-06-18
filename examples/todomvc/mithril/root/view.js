/*global m */
(function(ref) {
  var info = m("footer.info", [
    m("p", "Double-click to edit a todo"),
    m("p", [m("span", "Meiosis - Mithril - Created by "), m("a", {href: "http://twitter.com/foxdonut00"}, "foxdonut00")]),
    m("p", [m("span", "Part of "), m("a", {href: "http://todomvc.com"}, "TodoMVC")])
  ]);

  ref.root = ref.root || {};

  ref.root.view = function(todoapp) {
    return m("div", [todoapp, info]);
  };
})(window);
