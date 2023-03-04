// @ts-check
import m from 'mithril';

import { randomGif } from '../random-gif';

export const randomGifPair = {
  nested: {
    first: randomGif,
    second: randomGif
  },
  view: (cell, newGifGenerated) =>
    m('div.border.border-warning.p-2',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '5px' } },
      m('div', cell.nested.first.view(cell, newGifGenerated)),
      m('div', cell.nested.second.view(cell, newGifGenerated))
    )
};
