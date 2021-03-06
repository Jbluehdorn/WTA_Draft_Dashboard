import React from 'react'
import { withAuth0 } from '@auth0/auth0-react'

class LogoutButton extends React.Component {
    render() {
        const { logout } = this.props.auth0
    
        return (
            <button 
                className="btn btn-danger" 
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Sign Out
            </button>
        )
    }
}

export default withAuth0(LogoutButton)