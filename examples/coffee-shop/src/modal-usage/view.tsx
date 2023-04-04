import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';
import { State } from '../types';
import { ModalExampleType, modalExample } from '../modal-example';

const actions = {
  onSave: (cell: MeiosisCell<ModalExampleType>) => {
    console.log('save:', cell.state);
  }
};

export const ModalUsage: MeiosisView<State> = ({ cell }) => (
  <div>
    <button type="button" class="btn btn-primary" onClick={() => null}>
      Launch example modal
    </button>
    {modalExample({ cell: cell.nest('modalExample'), onClose: actions.onSave })}
  </div>
);
