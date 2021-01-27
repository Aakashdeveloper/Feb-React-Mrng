import React,{Component,Fragment} from 'react';

class Header extends Component{
    render(){
        return(
            <Fragment>
                <center>
                    <h1>React App</h1>
                </center>
                <hr/>
            </Fragment>
        )
    }
}
/*const Header = () => {
    return(
        <header>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </header>
    )
}*/

export default Header;