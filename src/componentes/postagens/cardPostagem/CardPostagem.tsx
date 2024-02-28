import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='shadow-2xl shadow-borgonha border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-rosapink py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className=' text-lg text-transparent bg-clip-text bg-gradient-to-r text-transparent from-vinho to-marromclaro font-serif font-bold text-center uppercase  '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif uppercase'>{post.titulo}</h4>
          <p className='text-lg text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>{post.texto}</p>
          <p className='text-lg  text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif' >Tema: {post.tema?.descricao}</p>
          <p className='text-lg  text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='bg-rose-100 font-bold hover:text-white hover:bg-rosanuvem w-full font-serif  border-double border-4 border-rosalaranja rounded text-rosapink py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='border-4 border-rosalaranja rounded text-rosapink bg-borgonha w-full font-serif font-bold text-white hover:bg-red-400 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem