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
    const response = await api.put(`/update/${registerUpdate.id}`)
    const updateRegister = registers.map(r => r.id ===
        registerUpdate.id ? response.data.register : response
    )

    setRegister(updateRegister)
  }

  async function deleteRegister(registerDelete: Register) {
    await api.delete(`/register/${registerDelete.id}`)

    setRegister(registers.filter(r => r.id !== registerDelete.id))
  }

  return(
    <EmployeeContext.Provider value={{ registers, createRegister, updateRegister, deleteRegister }}>
      {children}
    </EmployeeContext.Provider>
  )
}