import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";
import { Container } from "./styles";

export function EmployeesTable() {
  const { registers } = useContext(EmployeeContext);

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
          {registers.map(registers => {
            return (
              <tr key={registers.id}>
                <td>{registers.name}</td>
                <td>{registers.email}</td>
                <td>{registers.startDate}</td>
                <td>{registers.team}</td>
              </tr>
            )
          })}          
        </tbody>
      </table>
    </Container>
  )
}