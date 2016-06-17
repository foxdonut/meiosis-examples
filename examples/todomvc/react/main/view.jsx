/*global React */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = function(renderedTodos) {
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
})(window);
