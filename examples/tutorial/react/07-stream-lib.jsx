/*global ReactDOM, flyd*/
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

var update = flyd.stream();
var view = createView(update);

var model = 0;

var models = flyd.scan(function(model, value) {
  return model + value;
}, model, update);

var element = document.getElementById("app");

models.map(function(model) {
  ReactDOM.render(view(model), element);
});
