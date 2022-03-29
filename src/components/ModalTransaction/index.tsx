import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestModalNewTransactionClose: () => void;
}

export function ModalTransaction(props: ModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestModalNewTransactionClose}
    >
      <h2>Nova Transação</h2>
    </Modal>
  );
}
