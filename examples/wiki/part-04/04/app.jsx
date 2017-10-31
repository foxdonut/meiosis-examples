import { pages } from "./navigation";
import { createHomePage } from "./homePage";
import { createBeerListPage } from "./beerListPage";
import { createBeerDetailsPage } from "./beerDetailsPage";
import { createBreweryListPage } from "./breweryListPage";
import { createBreweryDetailsPage } from "./breweryDetailsPage";
import { createBreweryBeerListPage } from "./breweryBeerListPage";
import { createBreweryBeerDetailsPage } from "./breweryBeerDetailsPage";
import { createPleaseWait } from "./pleaseWait";

export const createAppModel = () => ({
  page: Object.assign({ params: {} }, pages.home)
});

export const createApp = (update, navigation, router) => {
  const homePage = createHomePage(update);
  const beerListPage = createBeerListPage({
    beerDetails: id => _evt => navigation.navigateToBeerDetails({ id })
  }, router);
  const beerDetailsPage = createBeerDetailsPage(update, navigation, router);
  const breweryListPage = createBreweryListPage(update, navigation, router);
  const breweryDetailsPage = createBreweryDetailsPage(update, navigation, router);
  const breweryBeerListPage = createBreweryBeerListPage(update, navigation, router);
  const breweryBeerDetailsPage = createBreweryBeerDetailsPage(update, navigation, router);

  const pageMap = {
    [pages.home.id]: homePage,
    [pages.beerList.id]: beerListPage,
    [pages.beerDetails.id]: beerDetailsPage,
    [pages.breweryList.id]: breweryListPage,
    [pages.breweryDetails.id]: breweryDetailsPage,
    [pages.breweryBeerList.id]: breweryBeerListPage,
    [pages.breweryBeerDetails.id]: breweryBeerDetailsPage
  };

  const pleaseWait = createPleaseWait();

  return {
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
                <a href={router.getLink(pages.home.id)}>Home</a>
              </li>
              <li className={isActive(pages.beerList.tab)}>
                <a href={router.getLink(pages.beerList.id)}>Beer</a>
              </li>
              <li className={isActive(pages.breweryList.tab)}>
                <a href={router.getLink(pages.breweryList.id)}>Brewery</a>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToHome()}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBeerList()}>Beer</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onClick={_evt => navigation.navigateToBreweryList()}>Brewery</button>
              </li>
            </ul>
          </nav>
          {model.operationInProgress ? pleaseWait.view() : component.view(model)}
        </div>
      );
    }
  };
};
