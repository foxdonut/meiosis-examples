import { createBeerDetails } from "./beerDetails";
import { createBackToBeerList } from "./backToBeerList";

export const createBeerDetailsPage = (update, navigation) => {
  const actions = {
    navigateToBeerList: () => navigation.navigateToBeerList()
  };

  const beerDetails = createBeerDetails();
  const backToBeerList = createBackToBeerList(actions);

  return {
    view: model => (
      <div>
        {beerDetails.view(model)}
        {backToBeerList.view(model)}
      </div>
    )
  };
};
