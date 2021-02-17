import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super()

        this.state={
            username:'',
            imgurl:''
        }
    }

    conditionalHeader =() => {
        if(sessionStorage.getItem('username') == null || sessionStorage.getItem('username') == undefined){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a href="">
                        <img src={this.state.imgurl} style={{height:50,width:50}}/>
                        Hi {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Developer Funnel</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/viewBooking">Bookings</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            {this.conditionalHeader()}
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestData={
                code:code
            }
            fetch(`http://localhost:9800/oauth`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then((res) => res.json())
            .then((data) => {
                var result = data.login;
                var img = data.avatar_url;
                sessionStorage.setItem('username',result)
                this.setState({imgurl:img,username:result})
            })
        }
    }
}

export default withRouter(Header)