import React from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import Popular from '../../layouts/Popular';
import Footer from '../../layouts/Footer';

class Home extends React.Component {
    render(){
        return(
            <>
            <Header />
            <Sidebar />
            <Popular />
            <Footer />
            </>
        );
    }
}

export default Home;