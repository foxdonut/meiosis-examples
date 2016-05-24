/*global $, Handlebars*/
(function(ref) {
  var header = Handlebars.compile($("#header").html())();

  var mainTemplate = Handlebars.compile($("#main").html());

  var main = function(model) {
    return mainTemplate(model);
  };

  var footerTemplate = Handlebars.compile($("#footer").html());

  var footer = function(model) {
    return footerTemplate(model);
  };

  var todoappTemplate = Handlebars.compile($("#todoapp").html());

  var todoapp = function(model) {
    return todoappTemplate({
      header: header,
      main: main(model),
      footer: footer(model)
    });
  };

  var info = Handlebars.compile($("#info").html())();

  var view = function(model) {
    return todoapp(model) + info;
  };

  ref.view = view;
})(window);
