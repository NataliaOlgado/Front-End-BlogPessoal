import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlerta } from '../../utils/toastAlerta'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-5xl text-center my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Cadastrar</h2>
          <div className="flex flex-col w-full font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 text-rosanuvem"
              value={usuario.nome} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 text-rosanuvem"
              value={usuario.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 text-rosanuvem"
              value={usuario.foto} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 text-rosanuvem"
              value={usuario.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 text-rosanuvem"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
          <button className='bg-rose-100 font-bold hover:text-white hover:bg-rosanuvem w-1/2 font-serif  border-double border-4 border-rosalaranja rounded text-rosapink py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-center justify-center py-2' type='submit'>
              Cadastrar
            </button>
            <button className='border-4 border-rosalaranja rounded text-laranja bg-borgonha w-1/2 font-serif font-bold text-white hover:bg-red-400 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white flex items-center justify-center' onClick={back}>
              Cancelar
            </button>
            
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro