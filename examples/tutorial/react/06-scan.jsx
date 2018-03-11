/*global ReactDOM*/
var createView = function(update) {
  var increase = function(amount) {
    return function(_event) {
      update(amount);
    };
  };
  var view = function(model) {
    return (<div>
      <div>Counter: {model}</div>
      <button onClick={increase( 1)}>+1</button>
      <button onClick={increase(-1)}>-1</button>
    </div>);
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
  var accumulated = initial;

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
  ReactDOM.render(view(model), element);
});
