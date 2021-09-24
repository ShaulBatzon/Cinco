import React from 'react'
import { Link } from 'react-router-dom';
export class GigPreview extends React.Component {
    state = {
    }
    render() {
        const { gig } = this.props
        console.log(gig);
        console.log(gig.imgUrls)
        return (
            <div to="/GigDetails" className="card-preview clean-link">
                <Link to="/GigDetails" >
                    <img src={gig.imgUrls[0]} />
                </Link>

                <div className="card-mini-user">
                    <img className="card-seller-img" src={gig.seller.imgUrl} />
                    <a className="clean-link" href="/SellerDetails">{gig.seller.fullname}</a>
                </div>
                <a className="card-title" href="/GigDetails">{gig.title}</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                    <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 
                        35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 
                        2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 
                        56 46z">
                    </path></svg>
                {/* <a>⭐ {gig.reviews[this.props.key].txt}</a>  */}
                {/* {link} */}
                <a>{gig.price}</a>
            </div>
        )
    }
}