import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Postagem from '../../../models/Postagem'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/postagens")
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Postagem apagada com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar a Postagem', 'erro')
    }

    retornar()
  }
  return (
    <div className='container  w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Deletar postagem</h1>

      <p className='text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

      <div className='shadow-2xl shadow-borgonha border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='bg-rosanuvem font-serif py-2 px-6 text-borgonha font-bold text-2xl'>Postagem</header>
        <div className="p-4">
          <p className='text-x3 h-full font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>{postagem.titulo}</p>
          <p className='text-x1 h-full  text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button className='bg-rose-100 font-bold hover:text-white hover:bg-rosanuvem w-full font-serif  border-double border-4 border-rosalaranja rounded text-rosapink py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-center justify-center py-2' onClick={retornar}>Não</button>
          <button className='border-4 border-rosalaranja rounded text-rosapink bg-borgonha w-full font-serif font-bold text-white hover:bg-red-400 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white flex items-center justify-center' onClick={deletarPostagem}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarPostagem