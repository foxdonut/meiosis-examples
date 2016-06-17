/*global React */
(function(ref) {
  var info = (
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  );

  ref.root = ref.root || {};

  ref.root.view = function(todoapp) {
    return (
      <div>
        {todoapp}
        {info}
      </div>
    );
  };
})(window);
