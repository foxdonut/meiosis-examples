import { updateFormValue } from 'meiosis-setup/util';
import { ModalExampleType } from './types';
import { ModalCreator } from '../common/modal';
import styles from './style.module.css';

export const createMyModal: ModalCreator<ModalExampleType> = (onClose) => ({
  size: 'modal-sm',
  title: 'My Modal Title',
  body: ({ cell }) => (
    <div>
      <div>Modal content</div>
      <div class={styles.formContainer}>
        Title:
        <input type="text" value={cell.state.title} onInput={updateFormValue(cell, 'title')} />

        Value:
        <input type="number" value={cell.state.value}
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
});
