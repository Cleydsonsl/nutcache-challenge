import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { EmployeeContext } from '../../EmployeeContext';
import { Container } from './styles';

interface UpdateEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdateEmployeeModal({ isOpen, onRequestClose }: UpdateEmployeeModalProps) {
  const { updateRegister } = useContext(EmployeeContext);
  
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

      <Container onSubmit={updateRegister}>
        <h2>Cadastrar Funcionario</h2>

        <input 
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)} 
        />
        <input 
          type="date"
          placeholder="Data Nascimento"
          value={birthDate}
          onChange={event => setBirthDate(event.target.value)}
        />
        <select 
          placeholder="Sexo"
          value={sex}
          onChange={event => setSex(event.target.value)} 
        >
          <option value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <input 
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)} 
        />
        <input 
          placeholder="CPF"
          value={cpf}
          onChange={event => setCpf(event.target.value)} 
        />
        <input 
          placeholder="Data de Inicio"
          value={startDate}
          onChange={event => setStartDate(event.target.value)} 
        />
        <select 
          placeholder="Equipe"
          value={team}
          onChange={event => setTeam(event.target.value)}  
        >
          <option value=""></option>
          <option value="Mobile">Mobile</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Front-End</option>
        </select>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};