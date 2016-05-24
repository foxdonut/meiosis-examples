/*global m */
(function(ref) {
  var header = function(model, actions) {
    return m("header.header", [
      m("h1", "todos"),
      m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true,
        value: model.newTodo, onkeyup: ref.events(actions).onNewTodoKeyUp})
    ]);
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(model, actions));

    return m("section.main", [
      m("input.toggle-all[type=checkbox]"),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", renderedTodos)
    ]);
  };

  var classIf = function(className) {
    return function(indicator) {
      return indicator ? className : "";
    };
  };

  var renderTodo = function(model, actions) {
    return function(todo) {
      var events = ref.events(actions);

      var editing = todo.id === model.editTodo.id;
      
      var todoClasses = [
        classIf(".completed")(todo.completed),
        classIf(".editing")(editing)
      ].join("");

      var input = editing ?
        m("input.edit[type=text]", {
          value: todo.title,
          onkeyup: events.onEditKeyUp(todo.id),
          onblur: events.onEditBlur(todo.id)
        }) : m("span");

      return m("li" + todoClasses, [
        m("div.view", [
          m("input.toggle[type=checkbox]", {checked: todo.completed,
            onchange: events.onToggleTodo(todo.id)}),
          m("label", {ondblclick: events.onEditTodo(todo)}, todo.title),
          m("button.destroy", {onclick: events.onDestroyTodo(todo.id)})
        ]),
        input
      ]);
    };
  };

  var footer = function(model, actions) {
    var clearCompleted = model.clearCompleted ?
        m("button.clear-completed", {onclick: ref.events(actions).onClearCompleted}, "Clear completed")
      : m("span");

    var classSelected = classIf("selected");

    return m("footer.footer", [
      m("span.todo-count", model.itemsLeftText),
      m("ul.filters", [
        m("li", [m("a", {href: "#/", class: classSelected(model.allSelected)}, "All")]),
        m("li", [m("a", {href: "#/active", class: classSelected(model.activeSelected)}, "Active")]),
        m("li", [m("a", {href: "#/completed", class: classSelected(model.completedSelected)}, "Completed")])
      ]),
      clearCompleted
    ]);
  };

  var todoapp = function(model, actions) {
    return m("section.todoapp", [
      header(model, actions),
      main(model, actions),
      footer(model, actions)
    ]);
  };

  var info = function() {
    return m("footer.info", [
      m("p", "Double-click to edit a todo"),
      m("p", [m("span", "Meiosis - Mithril - Created by "), m("a", {href: "http://twitter.com/foxdonut00"}, "foxdonut00")]),
      m("p", [m("span", "Part of "), m("a", {href: "http://todomvc.com"}, "TodoMVC")])
    ]);
  };

  var view = function(model, actions) {
    return m("div", [todoapp(model, actions), info()]);
  };
  ref.view = view;
})(window);
