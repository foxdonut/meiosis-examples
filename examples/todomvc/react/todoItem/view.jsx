/*global React */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.view = {
    todoItem: function(model, input, events) {
      var todo = model.todo;

      return (
        <li className={model.todoClasses}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed}
              onChange={events.onToggleTodo(todo.id)}/>
            <label onDoubleClick={events.onEditTodo(todo)}>{todo.title}</label>
            <button className="destroy" onClick={events.onDestroyTodo(todo.id)}></button>
          </div>
          {input}
        </li>
      );
    },

    todoInput: function(todo, events) {
      return (
        <input type="text" className="edit" value={todo.title}
          onKeyUp={events.onEditKeyUp(todo.id)}
          onChange={events.onEditChange(todo.id)}
          onBlur={events.onEditBlur(todo.id)}
          autoFocus
        />
      );
    },

    noTodoInput: function() {
      return null;
    }
  };
})(window);
