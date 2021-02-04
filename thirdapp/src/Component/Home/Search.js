import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location"

class Search extends Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity =(data) => {
        console.log(">>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>----SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>----SELECT Hotel-----</option>
                    </select>
                </div>
            </div>
        )
    }
    //call api 
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            {this.setState({location:data})}
        })
        .catch((err) => console.log(err))
    }
}

export default Search;