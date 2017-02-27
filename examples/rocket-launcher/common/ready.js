/*global window*/
(function(ref) {
  var root = document.getElementById("app");

  function on(target, type, handler, useCapture) {
    target.addEventListener(type, handler, !!useCapture);
  }

  function dispatchEvent(target, selector, handler) {
    return function(evt) {
      var targetElement = evt.target;
      var potentialElements = target.querySelectorAll(selector);
      var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

      if (hasMatch) {
        handler.call(targetElement, evt);
      }
    };
  }

  function delegate(target, selector, type, handler) {
    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
    on(target, type, dispatchEvent(target, selector, handler), type === "blur" || type === "focus");
  }

  ref.ready = function(actions) {
    delegate(root, "form.start", "submit", function(evt) {
      evt.preventDefault();
      actions.start(true);
    });

    delegate(root, "form.counting", "submit", function(evt) {
      evt.preventDefault();
      actions.abort(true);
    });
  };
})(window);
