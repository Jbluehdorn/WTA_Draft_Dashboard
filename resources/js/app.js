import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import Main from './views/main'

ReactDOM.render(
    <Auth0Provider
        domain="logicds.auth0.com"
        clientId="Nd7d3xyLSjbZ6k0em6hBw2xqOjFnenBh"
        redirectUri={`${window.location.origin}/#/profile`}
    >
        <HashRouter>
            <Main />
        </HashRouter>
    </Auth0Provider>, 
    document.getElementById('app')
)