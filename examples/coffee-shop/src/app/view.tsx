import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalUsage } from '../modal-usage';

export const App: MeiosisView<State> = ({ cell }) => (
  <div>
    <ModalUsage cell={cell}></ModalUsage>
  </div>
);
