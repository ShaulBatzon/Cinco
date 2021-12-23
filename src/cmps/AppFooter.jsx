

export const AppFooter = (props) => {


    return (
        <div className="app-footer home-layout">
            <small className="footer-border"></small>
            <div className="footer-container">
                <div className="left">
                    <span className="navbar-logo">Cinco</span>
                    <p>Cinco International Ltd. 2021</p>
                </div>
                <div className="right">
                    <ul className="social">
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                        <li><i className="fab fa-pinterest"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                    </ul>
                    <div className="language">
                        <span><i className="fas fa-globe"></i></span>
                        <span>English</span>
                    </div>

                    <div className="currency">
                        <span><i className="fas fa-shekel-sign"></i> ILS</span>
                    </div>
                    <div className="accessability">
                        <i className="fas fa-universal-access"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}