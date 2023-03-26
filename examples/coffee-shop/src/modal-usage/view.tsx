import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';

const actions = {
  launchModal: (cell: MeiosisCell<State>) => {
    return cell;
  }
};

export const ModalUsage: MeiosisView<State> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={() => actions.launchModal(cell)}>
      Launch example modal
    </button>
  </div>
);
