const navigate = (page, params = {}) =>
  model => Object.assign(model, ({ page, params }));

export const transforms = {
  navigate,

  navigateTo: page => params => navigate(page, params),

  beerList: beerList =>
    model => Object.assign(model, { beerList }),

  brewery: params =>
    model => Object.assign(model, { brewery: { id: params.breweryId } }),

  breweryList: breweryList =>
    model => Object.assign(model, { breweryList }),

  breweryBeerList: (params, beerList) =>
    model => Object.assign(model, { brewery: { id: params.breweryId, beerList } })
};
