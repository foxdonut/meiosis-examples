/* mithril
import m from 'mithril';
import { h } from 'seview/mithril';

export const createRender = (element) => (view) => m.render(element, h(view));
end mithril */

/* preact */
import { render } from 'preact';
import { h } from 'seview/preact';

export const createRender = (element) => (view) => render(h(view), element);
/* end preact */

/* react
import { createRoot } from 'react-dom/client';
import { h } from 'seview/react';

export const createRender = (element) => {
  const root = createRoot(element);
  return (view) => root.render(h(view));
};
end react */

export const defaultImage = 'assets/smiley-cyrus.jpg';
