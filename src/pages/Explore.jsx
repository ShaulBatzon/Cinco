import React from 'react'

import { GigList } from '../cmps/GigList'

export class Explore extends React.Component {
    state = {}


    render() {
        return (
            <div>
                <h1>Explore</h1>
                <div className="main-container">
                    <GigList />
                </div>
            </div>
        )
    }
}