
import React from 'react'
// import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import routes from '../routes'


// import { onLogin, onLogout, onSignup, loadUsers, removeUser } from '../store/user.actions.js'
// import { LoginSignup } from './login-signup.jsx'


export class AppHeader extends React.Component {
    render() {
        return (
            <header className="app-header">
                <nav>
                    {routes.map(route => <NavLink exact key={route.path} to={route.path}> | {route.label}</NavLink>)}
                </nav>
            </header>
        )
    }
}
