/*global meiosis, window, React*/
(function(ref) {
  ref.addAction = meiosis.stream();

  ref.reactView = function(model) {
    var onInc = function(_evt) {
      ref.addAction(2);
    };
    var onDecr = function(_evt) {
      ref.addAction(-2);
    };
    return (
      <div>
        <div><span>React Counter: {model.counter}</span></div>
        <div>
          <button className="btn btn-sm btn-primary" onClick={onInc}>+ 2</button>
          <button className="btn btn-sm btn-default" onClick={onDecr}>- 2</button>
        </div>
      </div>
    );
  };
})(window);
