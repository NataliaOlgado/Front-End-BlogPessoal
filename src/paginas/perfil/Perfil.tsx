import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/capaj.jpg'
import perfil from '../../assets/perfil.jpg'
import { toastAlerta } from '../../utils/toastAlerta'
function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-pink-500' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto || perfil} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-rosalaranja relative z-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat' />
      <div className=" bg-gradient-to-r from-pink-950 to-rose-400 w-100%  relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
        <p className='text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif font-bold '>Nome: {usuario.nome} </p>
        <p className='text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif font-bold'>Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil