import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";
import { Container } from "./styles";

export function EmployeesTable() {
  const register = useContext(EmployeeContext);

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