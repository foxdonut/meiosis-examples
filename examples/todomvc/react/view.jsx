/*global React */
(function(ref) {
  ref.view = {
    main: function(renderedTodos) {
      return (
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {renderedTodos}
          </ul>
        </section>
      );
    },

    todoapp: function(header, main, footer) {
      return (
        <section className="todoapp">
          {header}
          {main}
          {footer}
        </section>
      );
    },

    info: function() {
      return (
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      );
    },

    root: function(todoapp, info) {
      return (<div>{todoapp}{info}</div>);
    }
  };
})(window);
