import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import Main from './views/main'

ReactDOM.render(
    <Auth0Provider
        domain="logicds.auth0.com"
        clientId="Nd7d3xyLSjbZ6k0em6hBw2xqOjFnenBh"
        redirectUri={window.location.origin}
    >
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Auth0Provider>, 
    document.getElementById('app')
)