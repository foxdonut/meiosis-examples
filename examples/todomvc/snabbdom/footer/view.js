/*global meiosisSnabbdom */
(function(ref) {
  ref.footer = ref.footer || {};

  var h = meiosisSnabbdom.renderer.h;

  ref.footer.view = function(model, actions) {
    var clearCompleted = model.clearCompleted ?
      h("button.clear-completed", {on: {click: actions.events.onClearCompleted}}, "Clear completed") : h("span");

    return h("footer.footer", [
      h("span.todo-count", String(model.itemsLeftText)),
      h("ul.filters", [
        h("li", [h("a", {props: {href: "#/"}, class: {selected: model.allSelected}}, "All")]),
        h("li", [h("a", {props: {href: "#/active"}, class: {selected: model.activeSelected}}, "Active")]),
        h("li", [h("a", {props: {href: "#/completed"}, class: {selected: model.completedSelected}}, "Completed")])
      ]),
      clearCompleted
    ]);
  };
})(window);
