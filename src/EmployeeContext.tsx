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
  team?: string;
}

type RegisterInput = Omit<Register, 'id'>;

interface EmployeeProviderProps {
  children: ReactNode;
}

interface RegisterContextData {
  registers: Register[];
  createRegister: (registers: RegisterInput) => Promise<void>;
  updateRegister: (registers: Register) => Promise<void>;
  deleteRegister: (registers: Register) => Promise<void>;
}

export const EmployeeContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

export function EmployeeProvider({children}: EmployeeProviderProps) {
  const [ registers, setRegister ] = useState<Register[]>([]);

  useEffect(() => {
    api.get('register')
    .then(response => setRegister(response.data.registers))
  }, []);

  async function createRegister(registerInput: RegisterInput) {
    const response = await api.post('/register', registerInput)
    const { register } = response.data;

    setRegister([...registers, register])
  }

  async function updateRegister(registerUpdate: Register) {
    const response = await api.patch(`/update/${registerUpdate.id}`)
    const { register } = response.data;

    setRegister([...registers, register])
  }

  async function deleteRegister(registerDelete: Register) {
    const response = await api.delete(`/register/${registerDelete.id}`)
    const { register } = response.data;

    setRegister(registers.filter(r => r.id !== register.id))
  }

  return(
    <EmployeeContext.Provider value={{ registers, createRegister, updateRegister, deleteRegister }}>
      {children}
    </EmployeeContext.Provider>
  )
}