import React from 'react'
import { gigService } from '../services/gig.service.js'
import { GigPreview } from './GigPreview'

export class GigList extends React.Component {
    state = {
        gigs: []
    }

    componentDidMount() {
        gigService.query()
            .then(res => {
                console.log('gigs:', res);
                this.setState({ gigs: res })
            })
    }
    render() {
        const { gigs } = this.state
        return (
            <div className="gig-list main-layout card-grid">
                {gigs.map((gig, idx) => <GigPreview key={idx} gig={gig} />)}
            </div>
        )
    }
}