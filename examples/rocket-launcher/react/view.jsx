/*global React*/
(function(ref) {
  var heading = (
    <ul className="nav nav-pills">
      <li role="presentation">
        <a className="btn btn-xs btn-default" href="/examples/rocket-launcher/vanillajs/index.html">Vanilla JS version</a>
      </li>
      <li role="presentation" className="active">
        <a className="btn btn-xs btn-default" href="/examples/rocket-launcher/react/index.html">React version</a>
      </li>
    </ul>
  );

  ref.view = actions => ({
    // State representation of the ready state
    ready: model => {
      const onStart = function(evt) {
        evt.preventDefault();
        actions.start(true);
      };
      return (<div>{heading}
        <p>Counter: {model.counter}</p>
        <form>
          <input type="submit" className="btn btn-primary" value="Start" onClick={onStart}/>
        </form>
      </div>);
    },

    // State representation of the counting state
    counting: model => {
      const onAbort = function(evt) {
        evt.preventDefault();
        actions.abort(true);
      };
      return (<div>{heading}
        <p>
          Count down: {model.counter} {model.even ? "(Even)" : "(Odd)"}
          {model.closeToLaunch ? " CLOSE TO LAUNCH!" : ""}
        </p>
        <form>
          <input type="submit" className="btn btn-danger" value="Abort" onClick={onAbort}/>
        </form>
      </div>);
    },

    // State representation of the aborted state
    aborted: model => (<div>{heading}<p>Aborted at Counter: {model.counter}</p></div>),

    // State representation of the launched state
    launched: () => (<div>{heading}<p>Launched</p></div>)
  });
})(window);
