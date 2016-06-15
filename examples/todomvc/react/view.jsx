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

    footer: function(model, actions) {
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
