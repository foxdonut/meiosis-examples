/*global meiosisSnabbdom */
(function(ref) {
  ref.main = ref.main || {};

  var h = meiosisSnabbdom.renderer.h;

  ref.main.view = function(renderedTodos) {
    return h("section.main", [
      h("input.toggle-all", {props: {type: "checkbox"}}),
      h("label", {attrs: {for: "toggle-all"}}, "Mark all as complete"),
      h("ul.todo-list", renderedTodos)
    ]);
  };
})(window);
