/*global m*/
var createView = function(update) {
  var increase = function(amount) {
    return function(_event) {
      update(amount);
    };
  };
  var view = function(model) {
    return [
      m("div", "Value: " + model),
      m("button", { onclick: increase( 1) }, "+1"),
      m("button", { onclick: increase(-1) }, "-1")
    ];
  };
  return view;
};

var stream = function(initial) {
  var callbacks = [];
  var createdStream = function(value) {
    for (var i = 0, t = callbacks.length; i < t; i++) {
      var callback = callbacks[i];
      callback(value);
    }
  };
  createdStream.map = function(callback) {
    var newStream = stream();

    callbacks.push(function(value) {
      newStream(callback(value));
    });

    if (initial !== undefined) {
      callback(initial);
    }

    return newStream;
  };
  return createdStream;
};

var scan = function(accumulator, initial, st) {
  var newStream = stream(initial);
  let accumulated = initial;

  st.map(function(value) {
    accumulated = accumulator(accumulated, value);
    newStream(accumulated);
  });

  return newStream;
};

var model = 0;
var update = stream();
var view = createView(update);

var models = scan(function(model, value) {
  return model + value;
}, model, update);

var element = document.getElementById("app");

models.map(function(model) {
  m.render(element, view(model));
});
