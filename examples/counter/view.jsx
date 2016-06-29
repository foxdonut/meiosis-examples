/*global window, React*/
(function(ref) {
  ref.reactView = function(model, propose) {
    var onInc = function(_evt) {
      propose({ add: 10 });
    };
    var onDecr = function(_evt) {
      propose({ add: -10 });
    };
    return (
      <div>
        <div><span>Counter: {model.counter}</span></div>
        <div>
          <button onClick={onInc}>+</button>
          <button onClick={onDecr}>-</button>
        </div>
      </div>
    );
  };
})(window);
