/*global $, Handlebars */
(function(ref) {
  var info = Handlebars.compile($("#info").html())();

  ref.root = ref.root || {};

  ref.root.view = function(todoapp) {
    return todoapp + info;
  };
})(window);
