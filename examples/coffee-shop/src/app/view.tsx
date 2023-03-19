import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';

export const App: MeiosisView<State> = ({ cell, more }) => (
  <div>{cell.state}{more}</div>
);
