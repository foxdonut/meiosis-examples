/*global meiosisSnabbdom */
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var h = meiosisSnabbdom.renderer.h;

  var header = function(model, actions) {
    var onKeyUp = function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
      else {
        actions.newTodo(evt.target.value);
      }
    };

    return h("header.header", [
      h("h1", "todos"),
      h("input.new-todo", {props: {placeholder: "What needs to be done?", autoFocus: true,
        value: model.newTodo}, on: {keyup: onKeyUp}})
    ]);
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(model, actions));

    return h("section.main", [
      h("input.toggle-all", {props: {type: "checkbox"}}),
      h("label", {attrs: {for: "toggle-all"}}, "Mark all as complete"),
      h("ul.todo-list", renderedTodos)
    ]);
  };

  var renderTodo = function(model, actions) {
    return function(todo) {
      var todoClasses = {
        "completed": todo.completed,
        "editing": todo.id === model.editTodo.id
      };

      var onEditKeyUp = function(todoId) {
        return function(evt) {
          if (evt.keyCode === ESCAPE_KEY) {
            actions.cancelEdit();
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

      var input = todo.editing ?
        h("input.edit", {
          props: { type: "text", value: todo.title },
          on: {
            keyup: onEditKeyUp(todo.id),
            blur: onEditBlur(todo.id)
          },
          hook: {
            insert: function(vnode) {
              var elm = vnode.elm;
              elm.focus();
              elm.selectionStart = elm.value.length;
            }
          }
        }) : h("span");

      var onToggleTodo = function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      };

      var onEditTodo = function(todo) {
        actions.editTodo(todo.title, todo.id);
      };

      var onDestroyTodo = function(todoId) {
        actions.deleteTodoId(todoId);
      };

      return h("li", {class: todoClasses}, [
        h("div.view", [
          h("input.toggle", {props: {type: "checkbox", checked: todo.completed},
            on: {change: onToggleTodo(todo.id)}}),
          h("label", {on: {dblclick: [onEditTodo, todo]}}, todo.title),
          h("button.destroy", {on: {click: [onDestroyTodo, todo.id]}})
        ]),
        input
      ]);
    };
  };

  var footer = function(model, actions) {
    var onClearCompleted = function(_evt) {
      actions.clearCompleted();
    };
    var clearCompleted = model.clearCompleted ?
      h("button.clear-completed", {on: {click: onClearCompleted}}, "Clear completed") : h("span");

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

  var todoapp = function(model, actions) {
    return h("section.todoapp", [
      header(model, actions),
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
