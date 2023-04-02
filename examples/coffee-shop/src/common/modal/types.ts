import { MeiosisCell, MeiosisView } from 'meiosis-setup/types';

export type ModalSize = 'modal-sm' | 'modal-lg' | 'modal-xl' | null;

export type ModalParams<S> = {
  size: ModalSize;
  title: string;
  body: MeiosisView<S>;
  footer: MeiosisView<S>;
};

export type ModalOnClose<S> = (cell: MeiosisCell<S>) => any;

export type ModalCreator<S> = (onClose: ModalOnClose<S>) => ModalParams<S>;
