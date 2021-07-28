import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import Main from './views/main'

library.add(faSpinner)

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