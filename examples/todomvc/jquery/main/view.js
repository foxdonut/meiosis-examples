/*global $, Handlebars */
(function(ref) {
  ref.main = ref.main || {};

  ref.main.view = Handlebars.compile($("#main").html());
})(window);
