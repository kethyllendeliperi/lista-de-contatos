import React from 'react'
import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'Ana Souza',
    email: 'ana.souza@example.com',
    telefone: '(21) 98888-8888'
  },
  {
    nome: 'Matheus Silva',
    email: 'matheus.silva@example.com',
    telefone: '(31) 97777-7777'
  },
  {
    nome: 'Isabela Santos',
    email: 'isabela.santos@example.com',
    telefone: '(11) 94444-4444'
  }
]

const ListaDeContatos = () => {
  return (
    <Container>
      <h1>Contatos</h1>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato nome={c.nome} email={c.email} telefone={c.telefone} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
