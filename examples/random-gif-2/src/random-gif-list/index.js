const m = require("mithril");
const b = require("bss").default;
const { nest } = require("../util/nest");

export const createRandomGifList = createRandomGif => update => {
  const randomGifList = nest(createRandomGif, ["randomGifList"], update);

  return {
    model: () => Object.assign({}, randomGifList.model()),
    view: model => m("div" + b.border("1px solid blue").p(8).mt(4), [
      m("div" + b.d("inline-block"), randomGifList.view(model))
    ])
  }
};
