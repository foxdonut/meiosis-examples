/*global React */
(function(ref) {
  ref.header = ref.header || {};

  ref.header.view = function(model, actions) {
    var events = actions.events;

    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={model.newTodo}
          onKeyUp={events.onNewTodoKeyUpEnterOnly} onChange={events.onNewTodoChange}/>
      </header>
    );
  };
})(window);
