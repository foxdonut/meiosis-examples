const createLoadBeerListView = actions => model => (
  <div>
    <a href="#">Load beer list</a>
    <button className="btn btn-default btn-xs"
      onClick={actions.loadBeerList({ breweryId: model.breweryId })}>Load beer list</button>
  </div>
);

export const createBreweryDetails = (components, actions) => {
  const loadBeerList = createLoadBeerListView(actions);

  return {
    view: model => (
      <div>
        <p>Details of brewery {model.breweryId}</p>
        {model.breweryBeerList ? components.beerList.view(model) : loadBeerList(model)}
      </div>
    )
  };
};
