import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsdata={this.state.news}/>
                <Footer year="2021" month="Feb"/>
            </React.Fragment>
        ) 
    }
}

export default Home;