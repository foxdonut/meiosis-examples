/*global $, Handlebars */
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.view = Handlebars.compile($("#footer").html());
})(window);
