import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalView } from '../common/modal';
import { ModalUsage } from '../modal-usage';

export const App: MeiosisView<State> = ({ cell }) => (
  <div>
    <ModalView cell={cell}></ModalView>
    <ModalUsage cell={cell}></ModalUsage>
  </div>
);
