import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from './profile'
import LoginButton from '../components/loginBtn'
import LogoutButton from '../components/logoutBtn'
import NavBar from '../components/navbar'

export default class Main extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="card mt-1">
                    <div className="card-header">
                        <h1>WTA Draft Bracket</h1>
                    </div>

                    <NavBar />

                    <div className="card-body">
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