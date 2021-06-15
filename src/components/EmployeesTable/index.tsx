import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Register {
  id: number;
  name: string;
  birthDate: string;
  sex: string;
  email: string;
  cpf: string;
  startDate: string;
  team: string;
}

export function EmployeesTable() {
  const [ register, setRegister ] = useState<Register[]>([]);

  useEffect(() => {
    api.get('register')
    .then(response => setRegister(response.data.registers))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Data Inicio</th>
          <th>Equipe</th>
        </thead>

        <tbody>
          {register.map(register => {
            return (
              <tr key={register.id}>
                <td>{register.name}</td>
                <td>{register.email}</td>
                <td>{register.startDate}</td>
                <td>{register.team}</td>
              </tr>
            )
          })}          
        </tbody>
      </table>
    </Container>
  )
}