import React from "react";
import { star } from '../../imgs/star.js'
import { utilService } from '../../services/util.service.js'
import { Review } from "./Review.jsx";
export class Reviews extends React.Component {
    state = {
        ratingBreakdown: {
            sellerCommunicationLevel: 0,
            friendRecommend: 0,
            serviceAsDescribed: 0
        }
    }

    componentDidMount() {
        this.setState({ ratingBreakdown: { sellerCommunicationLevel: utilService.getRandomIntInclusive(4, 5), friendRecommend: utilService.getRandomIntInclusive(4, 5), serviceAsDescribed: utilService.getRandomIntInclusive(4, 5) } })

    }


    render() {
        const { reviews } = this.props
        const { ratingBreakdown } = this.state
        return (
            <div>
                {reviews.length &&
                    <header>
                        <div className="reviews-details">
                            <h2>
                                <span className="reviews-num">
                                    <span>{reviews.length}</span>
                                    Reviews
                                </span>
                                <small>
                                    <span className="total-rating">
                                        <span>{star}{star}{star}{star}{star}</span><span>5</span>
                                    </span>
                                </small>
                            </h2>
                            <div className="breakdown-wrapper">
                                <div className="breakdown-left">
                                    <table className="reviews-table">
                                        <tbody>
                                            <tr>
                                                <td><button className="clean-button">5 Starts</button></td>
                                                <td>
                                                    <div className="prograss-bar">
                                                        <div className="star-prograss-wrapper"><span className="star-prograss-shape first"></span></div>
                                                    </div>
                                                </td>
                                                <td className="star-num">({reviews.length - 1})</td>
                                            </tr>
                                            <tr>
                                                <td><button className="clean-button">4 Starts</button></td>
                                                <td>
                                                    <div className="prograss-bar">
                                                        <div className="star-prograss-wrapper"><span className="star-prograss-shape"></span></div>
                                                    </div>
                                                </td>
                                                <td className="star-num">(1)</td>
                                            </tr>
                                            <tr>
                                                <td><button className="clean-button">3 Starts</button></td>
                                                <td>
                                                    <div className="prograss-bar">
                                                        <div className="star-prograss-wrapper"><span className=""></span></div>
                                                    </div>
                                                </td>
                                                <td className="star-num">(0)</td>
                                            </tr>
                                            <tr>
                                                <td><button className="clean-button">2 Starts</button></td>
                                                <td>
                                                    <div className="prograss-bar">
                                                        <div className="star-prograss-wrapper"><span className=""></span></div>
                                                    </div>
                                                </td>
                                                <td className="star-num">(0)</td>
                                            </tr>
                                            <tr>
                                                <td><button className="clean-button">1 Starts</button></td>
                                                <td>
                                                    <div className="prograss-bar">
                                                        <div className="star-prograss-wrapper"><span className=""></span></div>
                                                    </div>
                                                </td>
                                                <td className="star-num">(0)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ranking-container">
                                    <div className="ranking">
                                        <h6>Rating Breakdown</h6>
                                        <ul>
                                            <li>Seller communication level<span>{ratingBreakdown.sellerCommunicationLevel}<span className="review-star">{star}</span></span></li>
                                            <li>Recommend to a friend<span>{ratingBreakdown.friendRecommend}<span className="review-star">{star}</span></span></li>
                                            <li>Service as described<span>{ratingBreakdown.serviceAsDescribed}<span className="review-star">{star}</span></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {reviews.map((review,idx) => {
                                        return <Review key={idx} review={review} />
                                    })}
                                </ul>
                            </div>
                        </div>
                    </header>
                }
            </div>
        )
    }
}
