/*global React */
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var header = function(actions) {
    var onKeyPress = function(evt) {
      if (evt.which === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    };

    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={onKeyPress}/>
      </header>
    );
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(actions, model.meta));

    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {renderedTodos}
        </ul>
      </section>
    );
  };

  var renderTodo = function(actions, meta) {
    return function(todo) {
      var isEditing = meta[String(todo.id)] && meta[String(todo.id)].editing;

      var todoClasses = ref.classNames({
        "completed": todo.completed,
        "editing": isEditing
      });

      var onEditKeyUp = function(todoId) {
        return function(evt) {
          if (evt.which === ESCAPE_KEY) {
            actions.cancelEdit(todoId);
          }
          else if (evt.which === ENTER_KEY) {
            actions.saveTodo(evt.target.value, todoId);
          }
        };
      };

      var onEditChange = function(todoId) {
        return function(evt) {
          actions.editingTodo(evt.target.value, todoId);
        };
      };

      var onEditBlur = function(todoId) {
        return function(evt) {
          actions.saveTodo(evt.target.value, todoId);
        };
      };

      var input = isEditing ?
        <input type="text" className="edit" value={todo.title}
          onKeyUp={onEditKeyUp(todo.id)}
          onChange={onEditChange(todo.id)}
          onBlur={onEditBlur(todo.id)}
        /> : null;

      var onToggleTodo = function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      };

      var onEditTodo = function(todoId) {
        return function(_evt) {
          actions.editTodo(todoId);
        };
      };

      var onDestroyTodo = function(todoId) {
        return function(_evt) {
          actions.deleteTodoId(todoId);
        };
      };

      return (
        <li className={todoClasses}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed}
              onChange={onToggleTodo(todo.id)}/>
            <label onDoubleClick={onEditTodo(todo.id)}>{todo.title}</label>
            <button className="destroy" onClick={onDestroyTodo(todo.id)}></button>
          </div>
          {input}
        </li>
      );
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
      <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button> : null;

    var allSelected = !model.filter || model.filter.length < 2;
    var activeSelected = model.filter === "active";
    var completedSelected = model.filter === "completed";

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeftText}</span>
        <ul className="filters">
          <li><a href="#/" className={ref.classNames({selected: allSelected})}>All</a></li>
          <li><a href="#/active" className={ref.classNames({selected: activeSelected})}>Active</a></li>
          <li><a href="#/completed" className={ref.classNames({selected: completedSelected})}>Completed</a></li>
        </ul>
        {clearCompleted}
      </footer>
    );
  };

  var todoapp = function(model, actions) {
    return (
      <section className="todoapp">
        {header(actions)}
        {main(model, actions)}
        {footer(model, actions)}
      </section>
    );
  };

  var info = function() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );
  };

  var view = function(model, actions) {
    return (<div>{todoapp(model, actions)}{info()}</div>);
  };

  ref.view = view;
})(window);
