import React from 'react';

class Popular extends React.Component {

    render(){
        return(
            <>
            {/*============================== feature-post-area-start ================================*/}
            <section className="feature-post-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                    <div className="category-border-content">
                        <div className="category-detail">
                        <div className="category-img">
                            <img src="img/feature-1.jpg" alt />
                            <div className="category-overlay">
                            </div>
                        </div>
                        <div className="category-text">
                            <a href className="art">food</a>
                            <h4><a href="category.html">yummy chocolate muffin</a></h4>
                            <span className="art">12 jan, 2016</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                            <div className="category-link"><a href="single-posts.html">read more</a></div>
                            <div className="share-comment-section">
                            <div className="comment">
                                <i className="fa fa-heart-o"><span>25</span></i>
                                <i className="fa fa-comment-o"><span>19</span></i>
                            </div>
                            <div className="share">
                                <span>share:</span>
                                <a href><i className="fa fa-facebook" /></a>
                                <a href><i className="fa fa-twitter" /></a>
                                <a href><i className="fa fa-pinterest" /></a>
                                <a href><i className="fa fa-instagram" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="category-border-content">
                        <div className="category-detail">
                        <div className="category-img">
                            <img src="img/feature-2.jpg" alt />
                            <div className="category-overlay">
                            </div>
                        </div>
                        <div className="category-text">
                            <a href className="art">travel/journey</a>
                            <h4><a href="single-posts.html">close to mountain</a></h4>
                            <span className="art">12 jan, 2016</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                            <div className="category-link"><a href="category.html">read more</a></div>
                            <div className="share-comment-section">
                            <div className="comment">
                                <i className="fa fa-heart-o"><span>25</span></i>
                                <i className="fa fa-comment-o"><span>19</span></i>
                            </div>
                            <div className="share">
                                <span>share:</span>
                                <a href><i className="fa fa-facebook" /></a>
                                <a href><i className="fa fa-twitter" /></a>
                                <a href><i className="fa fa-pinterest" /></a>
                                <a href><i className="fa fa-instagram" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 fix-1">
                    <div className="popular-post-border-content">
                        <div className="popular-post-content">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                            <div className="popular-post-title">
                                <h4>Popular posts</h4>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                            <div className="popular-post-single top">
                                <div className="popular-post-single-img"><a href><img src="img/popular-1.jpg" alt /></a></div>
                                <div className="popular-post-single-text"><span>12 Jan, 2016</span><p>Yummy chocolate Muffin</p></div>
                            </div>
                            <div className="popular-post-single">
                                <div className="popular-post-single-img"><a href><img src="img/popular-2.jpg" alt /></a></div>
                                <div className="popular-post-single-text"><span>12 Jan, 2016</span><p>Music concert</p></div>
                            </div>
                            <div className="popular-post-single bottom">
                                <div className="popular-post-single-img"><a href><img src="img/popular-3.jpg" alt /></a></div>
                                <div className="popular-post-single-text"><span>12 Jan, 2016</span><p>new year celebration</p></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Popular;