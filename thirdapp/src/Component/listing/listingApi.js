import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter'

const url ="https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter=(data)=>{
        this.setState({hotellist:data})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data) => {this.setDataPerFilter(data)}}/>
                    <CostFilter roomPerCost={(data) => {this.setDataPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let tripId = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripId)
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }

}

export default Listing;
