import { useAuth0 } from '@auth0/auth0-react'
import { FC, MouseEvent } from 'react'

const Welcome: FC = () => {
    
    const { loginWithRedirect } = useAuth0()
    
    const handleOnClick = (_e: MouseEvent<HTMLButtonElement>) => loginWithRedirect();
    return (
        <div className="bg-wrap">
            <button className="login-button" onClick={handleOnClick}>Click to Login &raquo;</button>
        </div>
    )
}

export default Welcome