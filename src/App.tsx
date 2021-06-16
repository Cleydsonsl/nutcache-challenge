import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { NewEmployeeModal } from './components/NewEmployeeModal';
import { UpdateEmployeeModal } from './components/UpdateEmployeeModal';
import { EmployeeProvider } from './EmployeeContext';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [ isNewEmployeeModalOpen, setIsNewEmployeeModalOpen ] = useState(false);

  function handleOpenNewEmployeeModal() {
    setIsNewEmployeeModalOpen(true)
  }

  function handleCloseNewEmployeeModal() {
    setIsNewEmployeeModalOpen(false)
  }
  
  return (
    <EmployeeProvider>
      <Header onOpenNewEmployeeModal={handleOpenNewEmployeeModal} />
      <Dashboard />
      <NewEmployeeModal
        isOpen={isNewEmployeeModalOpen}
        onRequestClose={handleCloseNewEmployeeModal}
      />
      <UpdateEmployeeModal 
        isOpen={isNewEmployeeModalOpen}
        onRequestClose={handleCloseNewEmployeeModal}
      />
      <GlobalStyle />
    </EmployeeProvider>
  );
}

export default App;
