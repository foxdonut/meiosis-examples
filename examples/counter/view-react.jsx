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
        <div><span>React Counter: {model.counter}</span></div>
        <div>
          <button onClick={onInc}>+ 10</button>
          <button onClick={onDecr}>- 10</button>
        </div>
      </div>
    );
  };
})(window);
