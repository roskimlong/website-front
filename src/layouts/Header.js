import React from 'react';

class Header extends React.Component {
    
    constructor(){
        super();
    }

    render(){
        return(
        <>
            <div id="preloader" />
            {/*============================== top-area-start================================*/}
            <section className="top-area">
                <div className="container">
                <div className="row">
                    <div className="top-area-content">
                    <div className="col-md-6 col-sm-6 col-xs-5">
                        <div className="logo text-left">
                        <a href="index.html"><img src="/assets/img/logo/logo.jpg" alt /></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-7">
                        <div className="social-icon text-right">
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-pinterest" /></a>
                        <a href><i className="fa fa-instagram" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-rss" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*============================== menu-area-start ================================*/}
            <section className="menu-area">
                <div className="container">
                <div className="row">
                    <div className="menu-area-content clearfix">
                    <div className="col-md-7 col-sm-9 col-xs-12">
                        <div className="main-menu text-left">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">                                       
                            <li className="active">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu clearfix"> 
                                <li><a href="index.html">Standard Version</a></li>
                                <li><a href="index-1.html">List-Item With Sidebar</a></li>
                                <li><a href="index-2.html">Big-Item</a></li>
                                </ul>
                            </li>
                            <li><a href="about-me.html">About me</a></li>
                            <li><a href="category.html">Categories</a></li>
                            <li><a href="single-posts.html">Single posts</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>    
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-3 col-xs-12">
                        <div className="search-btn text-right">
                        <form>
                            <input type="search" placeholder="Type to search here" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </form>
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

export default Header;