/*global $, Handlebars*/
(function(ref) {
  var header = Handlebars.compile($("#header").html())();

  var mainTemplate = Handlebars.compile($("#main").html());

  var main = function(model, _actions) {
    return mainTemplate(model);
  };

  var footerTemplate = Handlebars.compile($("#footer").html());

  var footer = function(model) {
    return footerTemplate(model);
  };

  var todoapp = function(model, actions) {
    return "<section class='todoapp'>" +
      header +
      main(model, actions) +
      footer(model) +
      "</section>";
  };

  var info = Handlebars.compile($("#info").html())();

  var view = function(model, actions) {
    return todoapp(model, actions) + info;
  };

  ref.view = view;
})(window);
