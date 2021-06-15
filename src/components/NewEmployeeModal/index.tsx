import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewEmployeeModal({isOpen, onRequestClose}: NewEmployeeModalProps ) {
  return (
    
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        className="react-modal-close" 
        type="button" 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="FecharModal" />
      </button>
      <Container>
        <h2>Cadastrar Funcionario</h2>

        <input 
          placeholder="Nome" 
        />
        <input 
          type="date" 
        />
        <select placeholder="Sexo">
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <input 
          placeholder="E-mail"
        />
        <input 
          placeholder="CPF"
        />
        <input 
          placeholder="Data de Inicio"
        />
        <select placeholder="Equipe">
          <option value="Mobile">Mobile</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Front-End</option>
        </select>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}