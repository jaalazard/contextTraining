import { useContext } from "react"
import CurrentUserContext from "../contexts/CurrentUser"
import ButtonColorContext from "../contexts/ButtonColor"

export default function UserProfile() {
    const { isOnline, setIsOnline} = useContext(CurrentUserContext);
    const { color, setColor } = useContext(ButtonColorContext);
    const handleClick = () => {
        setIsOnline(!isOnline)
        color == 'green' ? setColor('red') : setColor('green');
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h2>User is {isOnline == true ? <span>online !</span> : <span>offline !</span>}</h2>
            <button style={{ color: color }} onClick={handleClick}>{isOnline?<span>Déconnexion</span> : <span>Connexion</span>}</button>        </div>  

    )
}