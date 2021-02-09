import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import ListingApi from './listing/listingApi';
import Details from './detalis/hotelDetail'

const Routing = ( ) => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/list/:id" component={ListingApi}/>
                    <Route path="/details/:id" component={Details}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;