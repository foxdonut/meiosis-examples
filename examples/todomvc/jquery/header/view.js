/*global $, Handlebars */
(function(ref) {
  ref.header = ref.header || {};

  ref.header.view = Handlebars.compile($("#header").html());
})(window);
