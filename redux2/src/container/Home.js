import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions/actionfile';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
        
    }

    render(){
        return(
            <div>
                Redux
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article
    }
}

export default connect(mapStateToProps)(Home);