/*global flyd, window, React*/
(function(ref) {
  ref.addToCounter = flyd.stream();

  ref.reactView = function(model) {
    var onInc = function(_evt) {
      ref.addToCounter(1);
    };
    var onDecr = function(_evt) {
      ref.addToCounter(-1);
    };
    return (
      <div>
        <div className="row">
          <div className="three columns">
            <a className="button" href="/examples/counter/jquery/index.html">jQuery version</a>
          </div>
          <div className="three columns">
            <a className="button button-primary" href="/examples/counter/react/index.html">React version</a>
          </div>
        </div>
        <div><span>Counter: {model.counter}</span></div>
        <div>
          <button className="button-primary" onClick={onInc}>+ 1</button>
          <button onClick={onDecr}>- 1</button>
        </div>
      </div>
    );
  };
})(window);
