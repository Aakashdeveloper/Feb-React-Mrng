import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsList from './NewsList';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*
    var a =[4,5,3,6,1,3,7,7]
    a.filter((data) => {
        return data>5
    })
    */

    filterNews =(userInput) => {
        console.log("userInput>>>",userInput)
        const output = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }

    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data)=> {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Feb"/>
            </React.Fragment>
        ) 
    }
}

export default Home;