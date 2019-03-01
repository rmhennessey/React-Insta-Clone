import React from 'react'; 
import styled from 'styled-components';
// import "./Login.css"; 

const LoginDiv = styled.div`
    background-size: cover; 
    height: 100vh; 
    margin-top: none;  
    padding-top: 10%; 
`;

const FormComponents = styled.form `
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    margin: 0 auto; 
    width: 25%; 
    padding: 40px; 
    border: 5px solid black;  
    background-color: white; 
    opacity: 0.7;
    border-radius: 10px; 
`;

const FormInLogo = styled.div `
    display: flex; 
    align-items: center; 
    margin-bottom: 10px;
`;

const FormLogInLogo = styled.img `
    height: 70%;
    width: 70%;
    margin: 0 auto;
`;

const LoginInput = styled.input `
    margin-bottom: 10px; 
`;

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
            <LoginDiv>
                    <FormComponents>
                        <FormInLogo>
                            <FormLogInLogo  src="insta_script.png" alt="Clone Login"/>
                        </FormInLogo>
                        <LoginInput type = "text" placeholder = "Username"  onChange = {this.changeUserNameHandler} required/>
                        <LoginInput type = "password" placeholder = "Password" onChange = {this.changePasswordHandler} required/>
                        <button onClick = {this.submitDataHandler}>Login</button>
                    </FormComponents>
             </LoginDiv>
        )
    }
}

export default Login; 