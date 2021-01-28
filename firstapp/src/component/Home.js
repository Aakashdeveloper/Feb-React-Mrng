import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList'

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <NewsList/>
            <Footer year="2021" month="Feb"/>
        </React.Fragment>
    )
}

export default Home;