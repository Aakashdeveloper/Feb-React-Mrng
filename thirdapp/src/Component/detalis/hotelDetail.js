import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';

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
                        <div className="col-md-6">
                            <h3>{details.name}</h3>
                            <h3>{details.locality}</h3>
                            <h3>{details.address}</h3>
                        </div>
                    </div>
                    <hr/>
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>About This Place</h2>
                            <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                           
                        </TabPanel>
                        <TabPanel>
                            <h3>{details.address}</h3>
                            <h2>Phno: 786767678</h2>
                        </TabPanel>
                      
                    </Tabs>
                    <Link to={`/`} className="btn btn-danger">Back</Link>
                    <Link to={`/booking/${details.name}`} className="btn btn-success">Place Booking</Link>
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