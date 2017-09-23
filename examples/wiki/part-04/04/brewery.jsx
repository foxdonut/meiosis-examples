import { createBreweryDetails } from "./breweryDetails";
import { createBeer } from "./beer";

export const createBrewery = (update, navigation) => {
  const actions = {
    breweryDetails: params => evt => navigation.navigateToBrewery(params),
  };

  const beerList = createBeer(update, navigation);

  const breweryDetails = createBreweryDetails({
    beerList
  }, {
    loadBeerList: params => evt => navigation.navigateToBreweryBeerList(params)
  });

  return {
    view: model => {
      return (
        <div>
          <p>Brewery</p>
          <ul>
            {model.breweryList.map(brewery =>
              <li key={brewery.id}>
                <a href={"#/brewery/" + brewery.id}>{brewery.title}</a>
                {" "}
                <button className="btn btn-default btn-xs"
                  onClick={actions.breweryDetails({breweryId: brewery.id})}>
                  {brewery.title}
                </button>
              </li>
            )}
          </ul>
          {model.breweryId ? breweryDetails.view(model) : null}
        </div>
      );
    }
  };
};
