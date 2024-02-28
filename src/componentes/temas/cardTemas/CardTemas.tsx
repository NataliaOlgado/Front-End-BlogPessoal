import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='bg-rose-100 shadow-2xl shadow-borgonha border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between '>
      <header className='py-2 px-6 font-serif font-bold bg-rosanuvem text-borgonha text-2xl '>Tema</header>
      <p className=' text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja  font-bold font-serif p-8 text-3xl '>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='bg-rose-100 font-bold hover:text-white hover:bg-rosanuvem w-full font-serif  border-double border-4 border-rosalaranja rounded text-rosapink py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='border-4 border-rosalaranja rounded text-rosapink bg-borgonha w-full font-serif font-bold text-white hover:bg-red-400 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas