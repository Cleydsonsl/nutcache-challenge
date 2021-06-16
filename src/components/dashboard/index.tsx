import { useState } from "react";
import { EmployeesTable } from "../EmployeesTable";
import { Container } from "./styles";

const [updateRegister, setUpdateRegister] = useState({
  open:false,
  register: {}
})

export function Dashboard() {
  return(
    <Container>
      
      <EmployeesTable />
      
    </Container>
  )
}