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
        <ul className="nav nav-pills">
          <li role="presentation">
            <a className="btn btn-xs btn-default" href="/examples/counter/jquery/index.html">jQuery version</a>
          </li>
          <li role="presentation" className="active">
            <a className="btn btn-xs btn-default" href="/examples/counter/react/index.html">React version</a>
          </li>
        </ul>
        <div><span>Counter: {model.counter}</span></div>
        <div>
          <button className="btn btn-sm btn-primary" onClick={onInc}>+ 1</button>
          <button className="btn btn-sm btn-default" onClick={onDecr}>- 1</button>
        </div>
      </div>
    );
  };
})(window);
