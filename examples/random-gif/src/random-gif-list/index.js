import m from 'mithril';
import { v1 as uuid } from 'uuid';

import { randomGif } from '../random-gif';

const get = (object, path) =>
  path.reduce((obj, key) => (obj === undefined ? undefined : obj[key]), object);

const hasGifs = (state) =>
  state.randomGifIds
    .map((randomGifId) => state[randomGifId])
    .map((imageState) => get(imageState, ['image', 'params', 'params', 'params', 'length']))
    .map(Boolean)
    .filter((x) => x).length > 0;

const actions = {
  add: (cell) => {
    const subId = uuid();
    const randomGifState = randomGif.initial;

    cell.update({ randomGifIds: (subIds) => subIds.concat(subId), [subId]: randomGifState });
  },

  remove: (cell, subId) => {
    cell.update({
      randomGifIds: (list) => {
        const index = list.indexOf(subId);
        return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
      },
      [subId]: undefined
    });
  }
};

const randomGifItem = (cell, subId, newGifGenerated) =>
  m('div.border.border-warning.p-2',
    { key: subId },
    randomGif.view(cell.nest(subId), newGifGenerated),
    m('button.btn.btn-warning.mt-2', { onclick: () => actions.remove(cell, subId) }, 'Remove')
  );

export const randomGifList = {
  initial: {
    randomGifIds: []
  },
  view: (cell, newGifGenerated) =>
    m('div.border.border-primary.p-2',
      m('div.mb-2', 'Has gifs: ', hasGifs(cell.state) ? 'Yes' : 'No'),
      m('button.btn.btn-primary', { onclick: () => actions.add(cell) }, 'Add'),
      m('button.btn.btn-warning.ms-2', {
        onclick: () =>
          cell.state.randomGifIds.map((subId) => randomGif.actions.reset(cell.nest(subId)))
      },
        'Reset All'
      ),
      m('div.mt-2',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' } },
        cell.state.randomGifIds.map((subId) => randomGifItem(cell, subId, newGifGenerated))
      )
    )
};
