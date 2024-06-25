import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Julia Rodrigues',
      email: 'julia.rodrigues@example.com',
      telefone: '(79) 95555-5555'
    },
    {
      id: 2,
      nome: 'Ana Lima',
      email: 'ana.lima@example.com',
      telefone: '(48) 93333-3333'
    },
    {
      id: 3,
      nome: 'Natalia Lopes',
      email: 'natalia.lopes@example.com',
      telefone: '(32) 92222-2222'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoExiste = state.itens.find(
        (contato) => contato.id === action.payload.id
      )
      if (contatoExiste) {
        alert('Contato existente.')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
