import { MeiosisViewParam } from 'meiosis-setup/types';
import { updateFormValue } from 'meiosis-setup/util';
import { ModalExampleType } from './types';
import { modalView, ModalOnClose } from '../common/modal';
import styles from './style.module.css';

interface ModalType extends MeiosisViewParam<ModalExampleType> {
  onClose: ModalOnClose<ModalExampleType>;
}

export const modalExample = ({ cell, onClose }: ModalType) => (
  modalView({
    cell, params: {
      size: 'modal-sm',
      title: 'My Modal Title',
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary ms-2" onClick={() => onClose(cell)}>
            Save changes
          </button>
        </div>
      )
    }
  })
);
