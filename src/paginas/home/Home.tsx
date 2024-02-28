import React from 'react';
import homeLogo from '../../assets/home1s.png'
import './Home.css';
import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';



function Home() {
  return (
      <>
       
      <div className="bg-pink=200 flex font-bold justify-center ">
      <div className='container place-content-center grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Seja bem vinde!</h2>
            <p className='text-xl text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Expresse aqui seus pensamentos e opniões!!</p>
            <p className='text-xl text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>De voz a sua Imaginação!</p>
            <div className="flex justify-around gap-4">
            <ModalPostagem />
            <button className=' border-double border-4 border-rosalaranja  rounded bg-white bg- text-rosapink font-bold py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110'>Ver postagens</button>
          </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;