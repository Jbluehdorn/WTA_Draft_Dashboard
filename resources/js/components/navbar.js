import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react'

import Logout from './logoutBtn'

export const routes = [
    {
        name: 'Home',
        pathName: '/'
    },
    {
        name: 'Profile',
        pathName: '/profile'
    }
]

export const adminRoutes = [
    {
        name: 'Admin',
        pathName: '/admin'
    }
]

class NavBar extends React.Component {
    render() {
        const { isAdmin, user } = this.props
        let userRoutes = routes.slice()

        if(isAdmin) {
            userRoutes = routes.concat(adminRoutes)
        }

        return (
            <nav className="navbar bg-secondary text-white bg-gradient navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#primaryNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="primaryNav">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            {
                                userRoutes.map(route => {
                                    return (
                                        <li className="nav-item text-center" key={route.name}>
                                            <Link 
                                                className={`nav-link ${this.props.location.pathname === route.pathName ? 'active' : ''}`}
                                                to={route.pathName}
                                                key={route}
                                            >
                                                {route.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="d-grid">
                            <Logout />
                        </div>
                    </div>
                </div>
            </nav>   
        )
    }
}

export default withAuth0(withRouter(props => <NavBar {...props} />))