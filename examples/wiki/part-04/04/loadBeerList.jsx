export const createLoadBeerList = actions => ({
  view: model => (
    <div>
      <a href="#">Load beer list</a>
      {" "}
      <button className="btn btn-default btn-xs"
        onClick={actions.loadBeerList({ breweryId: model.brewery.id })}>Load beer list</button>
    </div>
  )
});
