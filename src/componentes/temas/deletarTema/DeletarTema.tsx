import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
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
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='shadow-2xl shadow-borgonha border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='bg-rosanuvem font-serif py-2 px-6 text-borgonha font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl h-full font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif'>{tema.descricao}</p>
                <div className="flex">
                    <button className='bg-rose-100 font-bold hover:text-white hover:bg-rosanuvem w-full font-serif  border-double border-4 border-rosalaranja rounded text-rosapink py-2 px-4 max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-center justify-center py-2' onClick={retornar}>Não</button>
                    <button className='border-4 border-rosalaranja rounded text-rosapink bg-borgonha w-full font-serif font-bold text-white hover:bg-red-400 max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:text-white flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema