import { createBreweryDetails } from "./breweryDetails";
import { createBeerList } from "./beerList";

export const createBreweryListPage = (update, navigation) => {
  const actions = {
    breweryDetails: params => _evt => navigation.navigateToBreweryList(params),
  };

  const beerList = createBeerList({
    beerDetails: id => _evt => navigation.navigateToBreweryBeerDetails({ beerId: id })
  });

  const breweryDetails = createBreweryDetails({
    beerList
  }, {
    loadBeerList: params => _evt => navigation.navigateToBreweryBeerList(params)
  });

  return {
    view: model => {
      return (
        <div>
          <p>Brewery</p>
          <ul>
            {model.breweryList.map(brewery =>
              <li key={brewery.id}>
                <a href={"#/breweryList/" + brewery.id}>{brewery.title}</a>
                {" "}
                <button className="btn btn-default btn-xs"
                  onClick={actions.breweryDetails({breweryId: brewery.id})}>
                  {brewery.title}
                </button>
              </li>
            )}
          </ul>
          {model.brewery ? breweryDetails.view(model) : null}
        </div>
      );
    }
  };
};
