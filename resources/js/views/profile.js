import React from 'react'
import { withAuth0 } from '@auth0/auth0-react'

import {api_url} from '../consts'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: undefined
        }
    }

    getUserProfile(id) {
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
        const { user, isAuthenticated, isLoading } = this.props.auth0
        const { profile } = this.state

        if(isLoading) {
            return <div>Loading user...</div>
        }

        if(!user || !user.sub) {
            return 'Error'
        }
        
        if(!profile) {
            this.getUserProfile(user.sub.split('|')[1])
            return <div>Loading profile...</div>
        }
    
        return (
            isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{profile.name}</h2>
                    <p>{profile.user_metadata.phone}</p>
                </div>
            )
        )
    }
}

export default withAuth0(Profile)