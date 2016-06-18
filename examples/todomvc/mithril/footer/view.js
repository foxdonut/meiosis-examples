/*global m */
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.view = function(model, actions) {
    var clearCompleted = model.clearCompleted ?
        m("button.clear-completed", {onclick: actions.events.onClearCompleted}, "Clear completed") : m("span");

    return m("footer.footer", [
      m("span.todo-count", model.itemsLeftText),
      m("ul.filters", [
        m("li", [m("a", {href: "#/", class: ref.classNames({selected: model.allSelected})}, "All")]),
        m("li", [m("a", {href: "#/active", class: ref.classNames({selected: model.activeSelected})}, "Active")]),
        m("li", [m("a", {href: "#/completed", class: ref.classNames({selected: model.completedSelected})}, "Completed")])
      ]),
      clearCompleted
    ]);
  };
})(window);
