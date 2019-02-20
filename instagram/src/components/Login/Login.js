import React from 'react'; 
import "./Login.css"; 


class Login extends React.Component {
    constructor(){
        super(); 
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUserNameHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    changePasswordHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    submitDataHandler = e => {
        const username = this.state.username; 
        const password = this.state.password; 
        localStorage.setItem("username", username); 
        localStorage.setItem("password", password); 
        window.location.reload();
    }

    render() {
        return(
            <div className = "login">
                    <form className = "form-components">
                        <div className = "loginLogo">
                            <img  src="insta_script.png" />
                        </div>
                        <input className = "loginInput" type = "text" placeholder = "Username"  onChange = {this.changeUserNameHandler} required/>
                        <input className = "loginInput" type = "password" placeholder = "Password" onChange = {this.changePasswordHandler} required/>
                        <button onClick = {this.submitDataHandler}>Login</button>
                    </form>
             </div>
        )
    }
}

export default Login; 