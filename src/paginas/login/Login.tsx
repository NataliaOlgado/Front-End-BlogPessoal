import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (

   
  
    <>
     <div className='bg-gradient-to-r from-pink-950 to-rose-400 w-100% bg-pink-950 text-laranja flex justify-center py-4'>
  <div className="container flex justify-center text-lg">
            <Link to='/home' className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif '>Blog Pessoal Naty</Link>
            </div>
            </div>
      <div className="flex font-bold justify-center h-screen ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif ">Entrar</h2>
          <div className="font-serif text-vermelhorosa flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="font-serif text-vermelhorosa border-rose-500  border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="font-serif text-vermelhorosa  flex flex-col w-ful">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="font-serif text-vermelhorosa  border-2 border-rose-500 border-slate-700 rounded p-2"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button  type='submit' className=" transition ease-in-out delay-150 bg-rosapink hover:bg-rosanuvem rounded  hover:-translate-y-1  hover:scale-110 duration-300 text-white w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>

          <hr className="border-double border-4 border-rosalaranja text-vermelhorosa font-serif border-slate-800 w-full" />

          <p className='text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja'>
            Ainda não tem uma conta?{' '}</p>
            <Link to="/cadastro" className=" hover:scale-110 duration-300 w-1/2 py-2 flex justify-center font-serif text-rosapink hover:underline"> Cadastre-se
            </Link>  
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
      <div className='bg-gradient-to-r from-pink-950 to-rose-400 w-100% bg-pink-950 text-laranja flex justify-center py-4'>
  </div>
    </>
  );
}

export default Login;
