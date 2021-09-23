import React from 'react'

import { gigService } from '../services/gig.service'

import { GigPreview } from './GigPreview'

export class GigList extends React.Component {
    state = {
        gigs: []
    }

    componentDidMount() {
        const gigs = gigService.query()
        this.setState({ gigs })
    }
    render() {
        const { gigs } = this.state
        return (
            <div>
                {gigs.map(gig => <GigPreview gig={gig} />)}
            </div>
        )
    }
}