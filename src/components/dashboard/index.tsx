import { EmployeesTable } from "../EmployeesTable";
import { Container } from "./styles";

export function Dashboard() {
  return(
    <Container>
      <EmployeesTable />
    </Container>
  )
}