import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='bg-gradient-to-r from-pink-950 to-rose-400 w-100% bg-pink-950 text-laranja flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif '>Blog Pessoal Naty</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='font-serif font-serif font-bold hover:underline hover:text-borgonha max-w-xs transition duration-300 ease-in-out hover:scale-110'>Postagens</Link>
              <Link to='/temas' className='font-serif font-serif font-bold hover:underline hover:text-borgonha max-w-xs transition duration-300 ease-in-out hover:scale-110'>Temas</Link>
              <Link to='/cadastroTema' className='font-serif font-serif font-bold hover:underline hover:text-borgonha max-w-xs transition duration-300 ease-in-out hover:scale-110'>Cadastrar tema</Link>
              <Link to='/perfil' className='font-serif font-serif font-bold hover:underline hover:text-borgonha max-w-xs transition duration-300 ease-in-out hover:scale-110'>Perfil</Link>
              <Link to='' onClick={logout} className='font-serif font-serif font-bold hover:underline hover:text-borgonha max-w-xs transition duration-300 ease-in-out hover:scale-110'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar