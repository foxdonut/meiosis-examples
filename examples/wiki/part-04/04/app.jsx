import { pages } from "./navigation";
import { createHome } from "./home";
import { createBeer } from "./beer";
import { createBeerDetails } from "./beerDetails";
import { createBrewery } from "./brewery";

export const createApp = (update, navigation) => {
  const homeComponent = createHome(update);
  const beerComponent = createBeer({
    beerDetails: id => _evt => navigation.navigateToBeerDetails({ id })
  });
  const beerDetailsComponent = createBeerDetails(update, navigation);
  const breweryComponent = createBrewery(update, navigation);

  const pageMap = {
    [pages.home.id]: homeComponent,
    [pages.beer.id]: beerComponent,
    [pages.beerDetails.id]: beerDetailsComponent,
    [pages.brewery.id]: breweryComponent
  };

  return {
    model: () => ({
      page: pages.home,
      params: {}
    }),
    view: model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : pages.home.id;
      const component = pageMap[currentPageId];
      const currentTab = model.page.tab;
      const isActive = tab => tab === currentTab ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive(pages.home.tab)}>
                <a href="#/">Home</a>
              </li>
              <li className={isActive(pages.beer.tab)}>
                <a href="#/beer">Beer</a>
              </li>
              <li className={isActive(pages.brewery.tab)}>
                <a href="#/brewery">Brewery</a>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToHome()}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBeer()}>Beer</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBrewery()}>Brewery</button>
              </li>
            </ul>
          </nav>
          {component.view(model)}
        </div>
      );
    }
  };
};
