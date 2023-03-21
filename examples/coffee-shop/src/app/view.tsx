import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalView } from '../common/modal';

export const App: MeiosisView<State> = ({ cell }) => (
  <div>
    <ModalView cell={cell}></ModalView>
  </div>
);
