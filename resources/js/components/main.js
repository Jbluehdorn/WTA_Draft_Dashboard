import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Profile from './profile'

export default class Main extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h1>WTA Draft Bracket</h1>
                    </div>
                    <div>
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
                    </div>

                    <Switch>
                        <Route path="/profile" component={Profile} />
                        <Route path="/" exact >
                            <h1>Default</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}