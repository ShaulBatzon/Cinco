import React from 'react'
import { connect } from 'react-redux'
import { GigList } from '../cmps/GigList'
import { loadGigs} from '../store/gig.action'

class _Explore extends React.Component {
    state = {}

    componentDidMount() {
        this.props.loadGigs()
    }

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


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs
}


export const Explore = connect(mapStateToProps, mapDispatchToProps)(_Explore)