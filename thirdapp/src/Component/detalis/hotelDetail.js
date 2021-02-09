import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2>{this.state.details.name}</h2>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-12">
                            <img className="img-responsive" src={details.thumb}
                            style={{height:400,width:1500}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        var HotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${HotelId}`)
        this.setState({details:response.data[0]})
    }
}

export default Details