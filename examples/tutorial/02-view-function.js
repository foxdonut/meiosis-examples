/*global m*/
var view = function(model) {
  return m("div", "Value: " + model);
};

var initial = 0;
var element = document.getElementById("app");
m.render(element, view(initial));
