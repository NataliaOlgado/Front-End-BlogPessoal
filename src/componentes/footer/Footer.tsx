import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-gradient-to-r from-pink-950 to-rose-400 w-100% bg-pink-950 text-laranja">
          <div className="container flex flex-col items-center py-4">
            <p className='font-serif text-xl font-bold'>Blog pessoal Naty| Copyright: {data}</p>
            <p className='font-serif text-transparent from-rosalaranja to-laranja'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' className="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer" />
              <InstagramLogo size={48} weight='bold' className="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer" />
              <FacebookLogo size={48} weight='bold' className="max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer