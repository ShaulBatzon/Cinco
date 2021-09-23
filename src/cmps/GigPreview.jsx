import React from 'react'

export class GigPreview extends React.Component {
    state = {
    }
    render() {
        const { gig } = this.props
        return (
            <div>
                {/* {gig.imgUrls} */}
                ------------
                {gig.seller.fullname}
                {/* {gig.seller.imgUrl} */}
                -------------
                {gig.title}
                -------------
                {/* {star review + score + num of recivews} */}
                -------------
                {/* {link} */}
                -------------
                {gig.price}
            </div>
        )
    }
}