
import { star } from '../../imgs/star.js'
export function Reviews({ reviews }) {
    return (
        <div>
            <header>
                <div className="reviews-details">
                    <h2>
                        <span className="reviews-num">
                            <span>{reviews.length}</span>
                        Reviews
                        </span>
                        <small>
                            <span>
                                <span>{star}{star}{star}{star}{star}</span>
                            </span>
                        </small>
                    </h2>
                    <div className="breakdown-wrapper">
                        <div className="breakdown-left">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><button className="clean-button">5 Starts</button></td>
                                        <td>
                                            <div className="prograss-bar">
                                                <div className="star-prograss-wrapper"><span className="star-prograss-shape first"></span></div>
                                            </div>
                                        </td>
                                        <td className="star-num">(94)</td>
                                    </tr>
                                    <tr>
                                        <td><button className="clean-button">4 Starts</button></td>
                                        <td>
                                            <div className="prograss-bar">
                                                <div className="star-prograss-wrapper"><span className="star-prograss-shape"></span></div>
                                            </div>
                                        </td>
                                        <td className="star-num">(2)</td>
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
                        <div>
                            <div className="ranking">
                                <h6>Rating Breakdown</h6>
                                <ul>
                                    <li>Seller communication level<span>5<span className="review-star">{star}</span></span></li>
                                    <li>Recommend to a friend<span>5<span className="review-star">{star}</span></span></li>
                                    <li>Service as described<span>5<span className="review-star">{star}</span></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

function countRate() {

}