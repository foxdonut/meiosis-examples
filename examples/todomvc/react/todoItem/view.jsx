/*global React */
(function(ref) {
  ref.todoItemView = {
    todoItem: function(model, actions, todo, input) {
      var events = ref.events(actions);

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

    todoInput: function(model, actions) {
      var events = ref.events(actions);

      return (
        <input type="text" className="edit" value={model.editTodo.title}
          onKeyUp={events.onEditKeyUp(model.editTodo.id)}
          onChange={events.onEditChange(model.editTodo.id)}
          onBlur={events.onEditBlur(model.editTodo.id)}
          autoFocus
        />
      );
    }
  };
})(window);
