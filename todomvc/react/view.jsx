/*global React, ReactRouter */
(function(ref) {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var hashHistory = ReactRouter.hashHistory;
  var Redirect = ReactRouter.Redirect;
  var Link = ReactRouter.Link;

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

      var todoClasses = ref.classNames({
        "completed": todo.completed,
        "editing": isEditing
      });

      var input = isEditing ?
        <input type="text" className="edit" value={todo.title} /> : null;

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

  var footer = function(model) {
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    var itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    var clearCompleted = (model.todos.length - itemsLeft) > 0 ?
      <button className="clear-completed">Clear completed</button> : null;

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeftText}</span>
        <ul className="filters">
          <li><Link activeClassName="selected" to="/all">All</Link></li>
          <li><Link activeClassName="selected" to="/active">Active</Link></li>
          <li><Link activeClassName="selected" to="/completed">Completed</Link></li>
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

  var App = function(model, actions) {
    return function(props) {
      console.log(props.location.pathname);
      return (<div>{todoapp(model, actions)}{info()}</div>);
    };
  };

  var routes = function(model, actions) {
    return (
      <Route component={App(model, actions)}>
        <Route path="all"/>
        <Route path="active"/>
        <Route path="completed"/>
        <Redirect from="/" to="all"/>
      </Route>
    );
  };

  var view = function(model, actions) {
    // TODO: look into <Router createElement={..}/>
    // ref: https://github.com/reactjs/react-router/blob/master/docs/API.md#router
    return (
      <Router history={hashHistory} routes={routes(model, actions)}/>
    );
  };

  ref.view = view;
})(window);
