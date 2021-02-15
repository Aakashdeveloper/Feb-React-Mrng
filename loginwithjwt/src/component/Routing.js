import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import UserList from './UserApi';
import Profile from './Profile';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/users" component={UserList}/>
                <Route exact path="/profile" component={Profile}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing