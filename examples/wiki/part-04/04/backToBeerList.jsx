export const createBackToBeerList = actions => ({
  view: _model => (
    <div>
      <div>
        <a href="#/beerList">Back to beer list</a>
      </div>
      <div>
        <button className="btn btn-default btn-xs"
          onClick={actions.navigateToBeerList}>
          Back to beer list
        </button>
      </div>
    </div>
  )
});
