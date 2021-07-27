import React from 'react'

import LoginButton from '../components/loginBtn'

class Login extends React.Component {
    render() {
        return (
            <div className="col-6 offset-3 mt-1">
                <div className="card">
                    <div className="card-header text-center">WTA Draft Bracket</div>
                    <div className="card-body">
                        <LoginButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login