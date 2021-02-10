import React,{Component} from 'react';
import axios from 'axios';
import BookingView from './bookingDisplay';

const BookingUrl = "http://localhost:8900/booking";

class DisplayBooking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <BookingView bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(BookingUrl).then((res) => {this.setState({booking:res.data})})
    }
}

export default DisplayBooking;