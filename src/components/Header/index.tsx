import logo from '../../assets/logo.png';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="NutCache" />
        <button>
          New Register
        </button>
      </Content>
    </Container>
  )
}