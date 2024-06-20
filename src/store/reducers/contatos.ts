import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Ana Souza', 'ana.souza@example.com', '(21) 98888-8888', 1),
    new Contato(
      'Matheus Silva',
      'matheus.silva@example.com',
      '(31) 97777-7777',
      2
    ),
    new Contato(
      'Isabela Santos',
      'isabela.santos@example.com',
      '(11) 94444-4444',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
