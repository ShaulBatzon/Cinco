import React from 'react'

import { GigList } from '../cmps/GigList'

export class Explore extends React.Component {
    state = {}


    render() {
        return (
            <div>
                <div className="main-container">
                    <GigList />
                </div>
            </div>
        )
    }
}