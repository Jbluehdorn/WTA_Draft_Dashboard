import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react'

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
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            routes.map(route => {
                                return (
                                    <li className="nav-item" key={route.name}>
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
                </div>
            </nav>   
        )
    }
}

export default withAuth0(withRouter(props => <NavBar {...props} />))