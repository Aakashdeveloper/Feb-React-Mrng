import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Post from './Post'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
            <Route path="/profile" component={Profile}/>
    
        </BrowserRouter>
    )
}

export default Routing
