import React from 'react';
//var React = require('react');
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer'

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>Hii To React JS</h1>
            <h2>NareshIT</h2>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))