/*global React */
(function(ref) {
  ref.todoapp = ref.todoapp || {};

  ref.todoapp.view = function(header, main, footer) {
    return (
      <section className="todoapp">
        {header}
        {main}
        {footer}
      </section>
    );
  };
})(window);
