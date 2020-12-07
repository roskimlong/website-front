import React from 'react';

class Footer extends React.Component {

    render(){
        return(
            <>
            {/*============================== footer-top-area-start ================================*/}  
            <section className="footer-top-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                    <div className="footer-logo">
                        <a href="index.html"><img src="img/logo.png" alt /></a>
                    </div>
                    <div className="footer-content">
                        <p>get in touch</p>
                        <div className="footer-social-icon">
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-pinterest" /></a>
                        <a href><i className="fa fa-instagram" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-rss" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-0">
                    <div className="subscription-input">
                        <h4 className="footer-title">subscription</h4>
                        <form action="#">
                        <input type="email" placeholder="Email" />
                        <input type="submit" defaultValue="Subscribe" />
                        </form>
                    </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-0">
                    <div className="recent-post-content">
                        <h4 className="footer-title">recent post</h4>
                        <div className="recent-post-single">
                        <div className="recent-post-img">
                            <a href><img src="img/recent-1.jpg" alt /></a>
                        </div>
                        <div className="recent-post-text">
                            <span>01 jan, 2016</span>
                            <a href><p>celebration of new year</p></a>
                        </div>
                        </div>
                        <div className="recent-post-single">
                        <div className="recent-post-img">
                            <a href><img src="img/recent-2.jpg" alt /></a>
                        </div>
                        <div className="recent-post-text">
                            <span>01 jan, 2016</span>
                            <a href><p>color in nature</p></a>
                        </div>
                        </div>
                        <div className="recent-post-single">
                        <div className="recent-post-img">
                            <a href><img src="img/recent-3.jpg" alt /></a>
                        </div>
                        <div className="recent-post-text">
                            <span>01 jan, 2016</span>
                            <a href><p>yummy burgers</p></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                    <div className="footer-category">
                        <h4 className="footer-title">category</h4>
                        <ul>
                        <li><a href>Art/lifestyle</a></li>
                        <li><a href>Music</a></li>
                        <li><a href>Travel/journey</a></li>
                        <li><a href>Food</a></li>
                        <li><a href>Photography</a></li>
                        <li><a href>video</a></li>
                        <li><a href>Movie</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
            {/*============================== footer-top-area-start ================================*/}    
            <section className="footer-bottom-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="footer-bottom-text text-center">
                        <p>Blog Design 2016 ©All Rights reserved</p>
                        <p>Designed by <span><a href="#">BootstrapCafe</a></span></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Footer;