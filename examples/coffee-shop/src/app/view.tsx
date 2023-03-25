import { MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalView } from '../common/modal';
import { ModalButton } from '../modal-example';

export const App: MeiosisView<State> = ({ cell }) => (
  <div>
    <ModalView cell={cell}></ModalView>
    <ModalButton cell={cell}></ModalButton>
  </div>
);
