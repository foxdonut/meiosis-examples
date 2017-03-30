/*global window, React*/
(function(ref) {
  ref.reactView = function(update) {
    var addToCounter = function(value) {
      return function() {
        update(function(model) {
          return { counter: model.counter + value };
        });
      };
    };

    return function(model) {
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
            <button className="button-primary" onClick={addToCounter(1)}>+ 1</button>
            <button onClick={addToCounter(-1)}>- 1</button>
          </div>
        </div>
      );
    };
  };
})(window);
