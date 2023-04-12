import { MeiosisCell, MeiosisViewParam } from 'meiosis-setup/types';
import { updateFormValue } from 'meiosis-setup/util';
import { ModalExampleType } from './types';
import { closeModal, modalView, ModalOnClose } from '../common/modal';
import styles from './style.module.css';

interface ModalType extends MeiosisViewParam<ModalExampleType> {
  onSave: ModalOnClose<ModalExampleType>;
  onCancel: ModalOnClose<ModalExampleType>;
}

const actions = {
  save: (cell: MeiosisCell<ModalExampleType>, onSave: ModalOnClose<ModalExampleType>) => {
    closeModal();
    onSave(cell);
  },
  cancel: (cell: MeiosisCell<ModalExampleType>, onCancel: ModalOnClose<ModalExampleType>) => {
    closeModal();
    onCancel(cell);
  }
};

export const modalExample = ({ cell, onSave, onCancel }: ModalType) =>
  modalView({
    cell, params: {
      size: 'modal-sm',
      title: 'My Modal Title',
      onCancel: () => actions.cancel(cell, onCancel),
      body: ({ cell }) => (
        <div>
          <div>Modal content</div>
          <div class={`${styles.formContainer} mt-2`}>
            Title:
            <input type="text" class="form-control"
              value={cell.state.title} onInput={updateFormValue(cell, 'title')} />

            Value:
            <input type="number" class="form-control" value={cell.state.value}
              onInput={updateFormValue(cell, 'value', (value) => parseInt(value, 10))} />
          </div>
        </div>
      ),
      footer: ({ cell }) => (
        <div>
          <button type="button" class="btn btn-secondary"
            onClick={() => actions.cancel(cell, onCancel)}>
              Cancel
          </button>
          <button type="button" class="btn btn-primary ms-2"
            onClick={() => actions.save(cell, onSave)}>
            Save changes
          </button>
        </div>
      )
    }
  });
