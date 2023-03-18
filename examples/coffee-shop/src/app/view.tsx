import { MeiosisCell } from 'meiosis-setup/types';
import { State } from '../types';

type MeiosisView<S> = (params: { cell: MeiosisCell<S>, [others: string]: unknown }) => any;

export const App: MeiosisView<State> = ({ cell, more }) => (
  <div>{cell.state}{more}</div>
);
