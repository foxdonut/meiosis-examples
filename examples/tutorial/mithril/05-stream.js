/*global m*/

// -- Utility code

var stream = function() {
  var fns = [];
  var createdStream = function(value) {
    for (var i in fns) {
      fns[i](value);
    }
  };
  createdStream.map = function(fn) {
    var newStream = stream();

    fns.push(function(value) {
      newStream(fn(value));
    });

    return newStream;
  };
  return createdStream;
};

// -- Application code

var createView = function(update) {
  var increase = function(amount) {
    return function(_event) {
      update(amount);
    };
  };
  var view = function(model) {
    return [
      m("div", "Counter: " + model),
      m("button", { onclick: increase( 1) }, "+1"),
      m("button", { onclick: increase(-1) }, "-1")
    ];
  };
  return view;
};

// -- Setup code

var model = 0;
var update = stream();
var view = createView(update);

var element = document.getElementById("app");

update.map(function(value) {
  model = model + value;
  m.render(element, view(model));
});

update(model);
