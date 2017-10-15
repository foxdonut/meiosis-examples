const createLoadBeerListView = actions => model => (
  <div>
    <a href="#">Load beer list</a>
    {" "}
    <button className="btn btn-default btn-xs"
      onClick={actions.loadBeerList({ breweryId: model.brewery.id })}>Load beer list</button>
  </div>
);

export const createBreweryDetailsPage = (components, actions) => {
  const loadBeerList = createLoadBeerListView(actions);

  return {
    view: model => (
      <div>
        <p>Details of brewery {model.brewery.id}</p>
        { model.brewery.beerList
        ? components.beerList.view(model.brewery)
        : loadBeerList(model)
        }
      </div>
    )
  };
};
