import Modal from 'react-modal';

interface NewEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewEmployeeModal({isOpen, onRequestClose}: NewEmployeeModalProps ) {
  return (
    
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Funcionario</h2>
    </Modal>
  )
}