import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
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
