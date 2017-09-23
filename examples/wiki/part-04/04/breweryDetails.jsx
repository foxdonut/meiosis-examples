const createLoadBeerListView = actions => model => (
  <div>
    <a href="#">Load beer list</a>
    <button className="btn btn-default btn-xs"
      onClick={actions.loadBeerList({ breweryId: model.breweryId })}>Load beer list</button>
  </div>
);

const beerList = model => (
  <div>Beer list here</div>
);

export const createBreweryDetails = actions => {
  const loadBeerList = createLoadBeerListView(actions);

  return {
    view: model => (
      <div>
        <p>Details of brewery {model.breweryId}</p>
        {model.breweryBeerList ? beerList(model) : loadBeerList(model)}
      </div>
    )
  };
};
