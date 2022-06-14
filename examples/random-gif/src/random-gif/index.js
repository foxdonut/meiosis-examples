import { fold, Maybe } from 'static-tagged-union';
import m from 'mithril';

export const Loaded = Maybe;
export const Success = Maybe;
export const Image = Maybe;

const IMG_PREFIX = '/examples/random-gif/images/';
const gifNewUrl = 'https://api.giphy.com/v1/gifs/random';
const apiKey = 'HMUbJEROIPi2Dodeq0thL28emz5CMCRX';
// const api_key = "dc6zaTOxFJmzC"

const actions = {
  editTag: (cell, tag) => cell.update({ tag }),

  newGif: (cell, newGifGenerated) => {
    cell.update({ image: Loaded.N() });

    m.request({ url: gifNewUrl, params: { apiKey, tag: cell.state.tag } })
      .then((response) => {
        cell.update({ image: Loaded.Y(Success.Y(Image.Y(response.data.images.original.url))) });
        if (newGifGenerated) {
          newGifGenerated();
        }
      })
      .catch(() => cell.update({ image: Loaded.Y(Success.N()) }));
  },

  reset: (cell) => cell.update({ image: Loaded.Y(Success.Y(Image.N())) })
};

const imgsrc = (image) =>
  fold({
    N: () => IMG_PREFIX + 'loading.gif',
    Y: fold({
      N: () => IMG_PREFIX + 'error.png',
      Y: fold({
        N: () => IMG_PREFIX + 'blank.png',
        Y: (x) => x
      })
    })
  })(image);

export const randomGif = {
  initial: {
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ''
  },
  actions,
  view: (cell, newGifGenerated) =>
    m(
      'div.border.border-primary.p-2',
      m(
        'div',
        m('span', 'Tag:'),
        m('input[type=text].ms-1', {
          value: cell.state.tag,
          onkeyup: (evt) => actions.editTag(cell, evt.target.value)
        })
      ),
      m(
        'div.mt-2',
        m(
          'button.btn.btn-primary',
          { onclick: () => actions.newGif(cell, newGifGenerated) },
          'Random Gif'
        ),
        m('button.btn.btn-warning.ms-2', { onclick: () => actions.reset(cell) }, 'Reset')
      ),
      m('div.mt-2', m('img', { width: 200, height: 200, src: imgsrc(cell.state.image) }))
    )
};
