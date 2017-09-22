import { createBreweryDetails } from "./breweryDetails";

export const createBrewery = (update, navigation) => {
  const actions = {
    breweryDetails: id => evt => navigation.navigateToBrewery({ id }),
  };

  const breweryDetails = createBreweryDetails(update, navigation);

  return {
    view: model => {
      return (
        <div>
          <p>Brewery Page</p>
          <ul>
            {model.breweryList.map(brewery =>
              <li key={brewery.id}>
                <a href={"#/brewery/" + brewery.id}>{brewery.title}</a>
                {" "}
                <button className="btn btn-default btn-xs"
                  onClick={actions.breweryDetails(brewery.id)}>
                  {brewery.title}
                </button>
              </li>
            )}
          </ul>
          {model.params.id ? breweryDetails.view(model) : null}
        </div>
      );
    }
  };
};
