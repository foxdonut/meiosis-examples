export const createBreweryDetails = actions => ({
  view: model => (
    <div>
      <p>Details of brewery {model.breweryId}</p>
      <div>
        <a href="#">Load beer list</a>
        <button className="btn btn-default btn-xs"
          onClick={actions.loadBeerList({ breweryId: model.breweryId })}>Load beer list</button>
      </div>
    </div>
  )
});
