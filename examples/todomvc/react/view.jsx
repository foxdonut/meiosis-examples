/*global React */
(function(ref) {
  var header = function(model, actions) {
    var events = ref.events(actions);

    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={model.newTodo}
          onKeyUp={events.onNewTodoKeyUpEnterOnly} onChange={events.onNewTodoChange}/>
      </header>
    );
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(model, actions));

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

  var renderTodo = function(model, actions) {
    return function(todo) {
      var events = ref.events(actions);

      var editing = todo.id === model.editTodo.id;

      var todoClasses = ref.classNames({
        "completed": todo.completed,
        "editing": editing
      });

      var input = editing ?
        <input type="text" className="edit" value={model.editTodo.title}
          onKeyUp={events.onEditKeyUp(model.editTodo.id)}
          onChange={events.onEditChange(model.editTodo.id)}
          onBlur={events.onEditBlur(model.editTodo.id)}
          autoFocus
        /> : null;

      return (
        <li className={todoClasses}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed}
              onChange={events.onToggleTodo(todo.id)}/>
            <label onDoubleClick={events.onEditTodo(todo)}>{todo.title}</label>
            <button className="destroy" onClick={events.onDestroyTodo(todo.id)}></button>
          </div>
          {input}
        </li>
      );
    };
  };

  var footer = function(model, actions) {
    var onClearCompleted = function(_evt) {
      actions.clearCompleted();
    };
    var clearCompleted = model.clearCompleted ?
      <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button> : null;

    return (
      <footer className="footer">
        <span className="todo-count">{model.itemsLeftText}</span>
        <ul className="filters">
          <li><a href="#/" className={ref.classNames({selected: model.allSelected})}>All</a></li>
          <li><a href="#/active" className={ref.classNames({selected: model.activeSelected})}>Active</a></li>
          <li><a href="#/completed" className={ref.classNames({selected: model.completedSelected})}>Completed</a></li>
        </ul>
        {clearCompleted}
      </footer>
    );
  };

  var todoapp = function(model, actions) {
    return (
      <section className="todoapp">
        {header(model, actions)}
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
