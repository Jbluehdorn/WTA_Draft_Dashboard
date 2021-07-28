import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react'

import Profile from './profile'
import Login from './login'
import Admin from './admin'
import Tournaments from './tournaments'

import NavBar from '../components/navbar'
import Spinner from '../components/spinner'

import { api_url } from '../consts'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: undefined
        }
    }

    loadProfile(id) {
        fetch(`${api_url}/users/${id}`, {
            method: 'get',
            mode: 'cors'
        })
        .then(resp => resp.json())
        .then(json => this.setState({
            profile: json.body
        }))
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { isAuthenticated, isLoading, user } = this.props.auth0
        const { profile } = this.state

        if(!isLoading && user && !profile) {
            this.loadProfile(user.sub.split('|')[1])
        }

        return(
            <div className="container-fluid pt-1">
                {
                    isLoading ? (
                        <Spinner size="3x" color="white" />
                    ) : (
                        <div>
                            {
                                !isAuthenticated ? (
                                    <Login />
                                ) : (
                                    <div className="card bg-dark">
                                        <div className="card-header bg-dark bg-gradient text-white">
                                            <h1>WTA Draft Bracket</h1>
                                        </div>
                    
                                        <NavBar isAdmin={profile ? profile.user_metadata.isAdmin : false} />
                    
                                        <div className="card-body bg-light">
                                            <Switch>
                                                <Route path="/tournaments" component={Tournaments} />
                                                <Route path="/profile" component={Profile} />
                                                <Route path="/admin" component={Admin} />
                                                <Route path="/" exact >
                                                    <Redirect to="/profile" />
                                                </Route>
                                            </Switch>
                                        </div>
                    
                                        <div className="card-footer bg-dark bg-gradient text-white">
                                            {/* <LogoutButton /> */}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default withAuth0(Main)