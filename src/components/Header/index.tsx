import logo from '../../assets/logo.png';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewEmployeeModal: () => void;
}

export function Header({onOpenNewEmployeeModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="NutCache" />
        <button type="button" onClick={onOpenNewEmployeeModal}> 
          New Register
        </button>
      </Content>
    </Container>
  )
}