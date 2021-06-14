import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { NewEmployeeModal } from './components/NewEmployeeModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

function App() {
  const [ isNewEmployeeModalOpen, setIsNewEmployeeModalOpen ] = useState(false);

  function handleOpenNewEmployeeModal() {
    setIsNewEmployeeModalOpen(true)
  }

  function handleCloseNewEmployeeModal() {
    setIsNewEmployeeModalOpen(false)
  }
  
  return (
    <div className="App">
      <>
        <Header onOpenNewEmployeeModal={handleOpenNewEmployeeModal} />
        <Dashboard />
        <NewEmployeeModal
          isOpen={isNewEmployeeModalOpen}
          onRequestClose={handleCloseNewEmployeeModal}
        />
        <GlobalStyle />
      </>
    </div>
  );
}

export default App;
