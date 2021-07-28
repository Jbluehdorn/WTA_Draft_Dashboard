import React from 'react'

import LoginButton from '../components/loginBtn'

class Login extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-6 offset-md-3 mt-1">
                <div className="card bg-dark">
                    <div className="card-header text-center bg-dark bg-gradient text-white">WTA Draft Bracket</div>
                    <div className="card-body d-grid bg-light">
                        <LoginButton />
                    </div>
                    <div className="card-footer bg-dark bg-gradient"></div>
                </div>
            </div>
        )
    }
}

export default Login