import React,{Component} from 'react';
import {Link} from 'react-router-dom'
const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.props.history.push('/login');
    }

    ConditionlRender=()=>{
        if(this.state.user.role){
            if(this.state.user.role=="Admin"){
                return (
                    <Link className="btn btn-success" to="/users">
                        All Users
                    </Link>
                )
            } 
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') == null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div classNam="panel panel-success">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your Email Id is {this.state.user.email}</h2>
                    <h2>Your Role is {this.state.user.role}</h2>
                </div>
                {this.ConditionlRender()}
                <button className="btn btn-danger" onClick={this.handleLogout}>
                    LogOut
                </button>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

}

export default Profile