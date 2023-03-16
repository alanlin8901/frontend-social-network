import React from "react";
import "./Login.css"

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName:"",
      lastName:"",
      login:"",
      password:"",
    }
  }



  render(){
    return (<div className="login-popin">
      <div className="tabs">
        <div className="login-tab selected">sign in</div>
        <div className="login-tab">sign up</div>
      </div>
      <div className="sign-in">
        <form>
          <p>
            <label htmlFor="login">Login:</label>
            <input name="login" type="text"/>
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input name="password" type="password"/>
          </p>
          <p>
            <button className="sumit-btn" type="sumit">Sumit</button>
          </p>
        </form>
      </div>
      <div className="sign-up">
        <form>
          <p>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" type="text"/>
          </p>
          <p>
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" type="password"/>
          </p>
          <p>
            <label htmlFor="login">Login:</label>
            <input name="login" type="text"/>
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input name="password" type="password"/>
          </p>
          <p>
            <button className="sumit-btn" type="sumit">Sumit</button>
          </p>
        </form>
      </div>
    </div>)
  }
}

export default Login;
