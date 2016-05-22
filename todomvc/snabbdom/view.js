/*global meiosisSnabbdom */
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var h = meiosisSnabbdom.renderer.h;

  var header = function(actions) {
    var onKeyPress = function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    };

    return h("header.header", [
      h("h1", "todos"),
      h("input.new-todo", {props: {placeholder: "What needs to be done?", autoFocus: true}, on: {keypress: onKeyPress}})
    ]);
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(actions, model.meta));

    return h("section.main", [
      h("input.toggle-all", {props: {type: "checkbox"}}),
      h("label", {attrs: {for: "toggle-all"}}, "Mark all as complete"),
      h("ul.todo-list", renderedTodos)
    ]);
  };

  var renderTodo = function(actions, meta) {
    return function(todo) {
      var isEditing = meta[String(todo.id)] && meta[String(todo.id)].editing;

      var todoClasses = {
        "completed": todo.completed,
        "editing": isEditing
      };

      var onEditKeyUp = function(todoId) {
        return function(evt) {
          if (evt.keyCode === ESCAPE_KEY) {
            actions.cancelEdit(todoId);
          }
          else if (evt.keyCode === ENTER_KEY) {
            actions.saveTodo(evt.target.value, todoId);
          }
        };
      };

      var onEditBlur = function(todoId) {
        return function(evt) {
          actions.saveTodo(evt.target.value, todoId);
        };
      };

      var input = isEditing ?
        h("input.edit", {props: {type: "text", value: todo.title}, on: {
          keyup: onEditKeyUp(todo.id),
          blur: onEditBlur(todo.id)
        }}) : h("span");

      var onToggleTodo = function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      };

      var onEditTodo = function(todoId) {
        actions.editTodo(todoId);
      };

      var onDestroyTodo = function(todoId) {
        actions.deleteTodoId(todoId);
      };

      return h("li", {class: todoClasses}, [
        h("div.view", [
          h("input.toggle", {props: {type: "checkbox", checked: todo.completed},
            on: {change: onToggleTodo(todo.id)}}),
          h("label", {on: {dblclick: [onEditTodo, todo.id]}}, todo.title),
          h("button.destroy", {on: {click: [onDestroyTodo, todo.id]}})
        ]),
        input
      ]);
    };
  };

  var footer = function(model, actions) {
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    var itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    var onClearCompleted = function(_evt) {
      actions.clearCompleted();
    };
    var clearCompleted = (model.todos.length - itemsLeft) > 0 ?
      h("button.clear-completed", {on: {click: onClearCompleted}}, "Clear completed") : h("span");

    var allSelected = !model.filter || model.filter.length < 2;
    var activeSelected = model.filter === "active";
    var completedSelected = model.filter === "completed";

    return h("footer.footer", [
      h("span.todo-count", itemsLeftText),
      h("ul.filters", [
        h("li", [h("a", {props: {href: "#/"}, class: {selected: allSelected}}, "All")]),
        h("li", [h("a", {props: {href: "#/active"}, class: {selected: activeSelected}}, "Active")]),
        h("li", [h("a", {props: {href: "#/completed"}, class: {selected: completedSelected}}, "Completed")])
      ]),
      clearCompleted
    ]);
  };

  var todoapp = function(model, actions) {
    return h("section.todoapp", [
      header(actions),
      main(model, actions),
      footer(model, actions)
    ]);
  };

  var info = function() {
    return h("footer.info", [
      h("p", "Double-click to edit a todo"),
      h("p", [h("span", "Meiosis - Snabbdom - Created by "), h("a", {props: {href: "http://twitter.com/foxdonut00"}}, "foxdonut00")]),
      h("p", [h("span", "Part of "), h("a", {props: {href: "http://todomvc.com"}}, "TodoMVC")])
    ]);
  };

  var view = function(model, actions) {
    return h("div", [todoapp(model, actions), info()]);
  };
  ref.view = view;
})(window);
