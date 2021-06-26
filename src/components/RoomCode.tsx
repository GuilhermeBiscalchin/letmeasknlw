import copyImg from '../assests/image/copy.svg'

import '../style/room-code.css'

type RoomCodeProps = {
    code:string;
}

export function RoomCode(props: RoomCodeProps){
   function copyRoomCodeToClipboard(){
       navigator.clipboard.writeText(props.code)
   }
   
    return(
        <button className='room-code' onClick={copyRoomCodeToClipboard}>
            <div>
                <img className="copy-img" src={copyImg} alt="" />
            </div>
            <span className = "span-text">Sala #{props.code}</span>
        </button>
    )
}