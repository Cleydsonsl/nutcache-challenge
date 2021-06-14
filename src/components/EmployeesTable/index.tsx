import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function EmployeesTable() {
  useEffect(() => {
    api.get('transactions')
    .then(data => console.log(data))
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
          <tr>
            <td>João</td>
            <td>@email</td>
            <td>14/05/2021</td>
            <td>Front-End</td>
          </tr>
          <tr>
            <td>Miguel</td>
            <td>email@email</td>
            <td>14/05/2021</td>
            <td>Back-End</td>
          </tr>
          <tr>
            <td>Juarez</td>
            <td>emailmail@email</td>
            <td>14/05/2021</td>
            <td>FullStack</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}