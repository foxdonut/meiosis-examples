import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalView } from '../common/modal';

export const App: MeiosisView<State> = ({ cell, more }) => (
  <div>
    <div>{cell.state}{more}</div>
    <ModalView cell={cell}></ModalView>
  </div>
);
