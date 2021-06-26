import { Link, useHistory } from 'react-router-dom'
import { FormEvent,useState } from 'react'

import ilustracaoImg from '../assests/image/illustration.svg'
import logoImg from '../assests/image/logo.svg'


import '../style/auth.css'
import { Button } from '../components/Button'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'


export function Login() {

const {user} = useAuth()
const history = useHistory()

const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent ){
        event.preventDefault();

        //console.log(newRoom)

        if(newRoom.trim() === ''){
            return;
        }
        //aqui começa o recurso de dados do firebase.
        const roonRef = database.ref('rooms');

        const firebaseRoom = await roonRef.push({
            title:newRoom,
            authorId:user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id='pagina-auth'>
            <aside>
                <img src={ilustracaoImg} alt="Imagem de ilustração" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p className="p-color">Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="main-corpo">
                    <img src={logoImg} alt="Imagem do logo" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text"
                            placeholder="Nome da sala"
                            className="botao-semsass"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit" >Criar Sala</Button>
                    </form>
                    <p >Quer entrar em uma sala existente?<Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}