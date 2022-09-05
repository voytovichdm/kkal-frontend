import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'pages/routes'
import Topbar from 'components/TopBar/topbar'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/CurrentUserChecker'
import './node_modules/styles/style.css'

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <Topbar />
                    <Routes />
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
