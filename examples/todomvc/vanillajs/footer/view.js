/*global window */
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.view = function(model) {
    var clearCompleted = model.clearCompleted ?
      "<button class='clear-completed'>Clear completed</button>" : "";

    return "  <footer class='footer'>" +
      "    <span class='todo-count'>" + model.itemsLeftText + "</span>" +
      "    <ul class='filters'>" +
      "      <li><a href='#/'" + ref.classNames({selected: model.allSelected}) + ">All</a></li>" +
      "      <li><a href='#/active'" + ref.classNames({selected: model.activeSelected}) + ">Active</a></li>" +
      "      <li><a href='#/completed'" + ref.classNames({selected: model.completedSelected}) + ">Completed</a></li>" +
      "    </ul>" +
      clearCompleted +
      "  </footer>";
  };
})(window);
