import React from 'react';

import { temperature, Temperature } from '../temperature';

export const app = {
  initial: temperature.initial
};

export const App = ({ cell }) => (
  <div>
    <Temperature cell={cell} />
  </div>
);
