
import { useHistory } from 'react-router-dom'

import ilustracaoImg from '../assests/image/illustration.svg'
import logoImg from '../assests/image/logo.svg'
import googleIconImg from '../assests/image/google-icon.svg'

import '../style/auth.css'
import { Button } from '../components/Button'

import { useAuth } from '../hooks/useAuth'
import { FormEvent } from 'react'
import { useState } from 'react'
import { database } from '../services/firebase'



export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Sala não existe!');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Essa sala foi encerrada!');
            return;
        }
        history.push(`/rooms/${roomCode}`)
    }

    return (
        <div id='pagina-auth'>
            <aside>
                <img src = {ilustracaoImg} alt="Imagem de ilustração" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p className="p-color">Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="main-corpo">
                    <img src={logoImg} alt="Imagem do logo" />
                    <button onClick={handleCreateRoom} className="botao-semsass create-room">
                        <img src={googleIconImg}  alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input type="text"
                            placeholder="Digite o código da sala"
                            className="botao-semsass"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit" >Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}