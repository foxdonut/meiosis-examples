/*global React */
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.view = function(model, actions) {
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
})(window);
