import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 28px;
  margin-top: 18px;
  border-radius: 16px;
`

const Infos = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 18px;
  font-family: 'Robot Mono, monospace';
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const InputInfos = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 18px;
  font-family: 'Roboto Mono, monospace';
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const Nome = Infos
export const Email = Infos
export const Telefone = InputInfos
