import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Profile from './profile'
import LoginButton from '../components/loginBtn'
import LogoutButton from '../components/logoutBtn'

export default class Main extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="card mt-1">
                    <div className="card-header">
                        <h1>WTA Draft Bracket</h1>
                    </div>

                    <div className="card-body">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/profile" component={Profile} />
                            <Route path="/" exact >
                                <h1>Default</h1>
                            </Route>
                        </Switch>
                    </div>

                    <div className="card-footer">
                        <LoginButton />
                        <LogoutButton />
                    </div>
                </div>
            </div>
        )
    }
}