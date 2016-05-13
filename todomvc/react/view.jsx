/*global React */
(function(ref) {
  var header = function(actions) {
    var onKeyPress = function(evt) {
      actions.saveTodo(evt.which, evt.target.value);
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
      // TODO: consider https://github.com/JedWatson/classnames
      var completed = todo.completed ? "completed" : "";
      /*
      var dataId = " data-id='" + todo.id + "'";
      var checked = todo.completed ? " checked" : "";
      var editing = isEditing ? " className='editing'" : "";
      */
      var input = isEditing ?
        // <input" + dataId + " type="text" className="edit" value={todo.title} /> : null;
        <input type="text" className="edit" value={todo.title} /> : null;

      var onToggleTodo = function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      };

      var onDestroyTodo = function(todoId) {
        return function(_evt) {
          actions.deleteTodoId(todoId);
        };
      };

      return (
        <li className={completed}>
        {/* <li" + completed + editing + "> */}
          <div className="view">
            {/*<input" + dataId + " className="toggle" type="checkbox"" + checked + " />
            <label" + dataId + ">" + todo.title + "</label>
            <button" + dataId + " className="destroy"></button>*/}
            <input className="toggle" type="checkbox" onChange={onToggleTodo(todo.id)}/>
            <label>{todo.title}</label>
            <button className="destroy" onClick={onDestroyTodo(todo.id)}></button>
          </div>
          {input}
        </li>
      );
    };
  };

  var footer = function(model) {
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    var itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    var clearCompleted = (model.todos.length - itemsLeft) > 0 ?
      <button className="clear-completed">Clear completed</button> : null;

    var classSelected = "selected";
    var allSelected = !model.filter || model.filter.length < 2 ? classSelected : "";
    var activeSelected = model.filter === "active" ? classSelected : "";
    var completedSelected = model.filter === "completed" ? classSelected : "";

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeftText}</span>
        <ul className="filters">
          <li>
            <a href="#/" className={allSelected}>All</a>
          </li>
          <li>
            <a href="#/active" className={activeSelected}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={completedSelected}>Completed</a>
          </li>
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
        {footer(model)}
      </section>
    );
  };

  var info = function() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    );
  };

  var view = function(model, actions) {
    return (<div>{todoapp(model, actions)}{info()}</div>);
  };

  ref.view = view;
})(window);
