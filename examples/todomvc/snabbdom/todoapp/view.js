/*global meiosisSnabbdom */
(function(ref) {
  ref.todoapp = ref.todoapp || {};

  var h = meiosisSnabbdom.renderer.h;

  ref.todoapp.view = function(header, main, footer) {
    return h("section.todoapp", [header, main, footer]);
  };
})(window);
