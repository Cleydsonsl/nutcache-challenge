import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

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

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeContext = createContext<Register[]>([]);

export function EmployeeProvider({children}: EmployeeProviderProps) {
  const [ register, setRegister ] = useState<Register[]>([]);

  useEffect(() => {
    api.get('register')
    .then(response => setRegister(response.data.registers))
  }, []);

  return(
    <EmployeeContext.Provider value={register}>
      {children}
    </EmployeeContext.Provider>
  )
}