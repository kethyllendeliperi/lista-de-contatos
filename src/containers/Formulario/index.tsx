import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Container } from '../../styles'
import { Nome, Email, Telefone, Botao } from '../../components/Contato/styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const novoContato = new Contato(nome, email, telefone, 9)
    dispatch(cadastrar(novoContato))
    navigate('/')
  }

  const telefoneComoNumero = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const telefone = evento.target.value
    const somenteNumeros = telefone.replace(/\D/g, '')
    setTelefone(somenteNumeros)
  }

  return (
    <Container>
      <h1>Novo contato</h1>
      <form onSubmit={adicionarContato}>
        <Nome
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome completo"
        />
        <Email
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="E-mail"
        />
        <Telefone
          type="tel"
          value={telefone}
          onChange={telefoneComoNumero}
          placeholder="Telefone + DDD"
          pattern="[0-9]*"
        />
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
        <Botao type="submit">Voltar à lista de contatos</Botao>
      </form>
    </Container>
  )
}

export default Formulario
