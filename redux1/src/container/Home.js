import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionfile';
import DisplayComponent from '../component/DisplayPage'

class Home extends Component{
    // call actions
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }

}

//we will recive state here
function mapStateToProps(state){
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProps)(Home)