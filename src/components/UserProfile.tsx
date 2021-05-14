import { useAuth0 } from '@auth0/auth0-react'
import { FC } from 'react'

const UserProfile: FC = () => {

    const { user } = useAuth0()
    
    return (
        <div className="container">
            <div className="image-holder">
                <img src={user?.picture} width={"200"} height={"200"} alt="profile-avatar" />
            </div>
            <div className="details">
                <div><strong>Name: </strong>{user?.name}</div><br />
                <div><strong>Email: </strong>{user?.email}</div>
            </div>
        </div>
    )
}

export default UserProfile