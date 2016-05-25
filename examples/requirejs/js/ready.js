/*global define*/
define(["meiosisVanillaJs"], function(meiosisVanillaJs) {
  var renderer = meiosisVanillaJs.renderer;
  
  return function(actions) {
    renderer.delegate(document.body, "button#inc", "click", function() {
      actions.sendUpdate({ add: 1 });
    });
    renderer.delegate(document.body, "button#decr", "click", function() {
      actions.sendUpdate({ add: -1 });
    });
  };
});
