import React from 'react';
import { Link } from 'react-router-dom'
const LoginForm = () => {
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <OtherMethods />
    </div>
  );
};

const FormHeader = (props) => {
  return (
    <h2 id="headerTitle">{props.title}</h2>
  );
};

const Form = (props) => {
  return (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
    </div>
  );
};

const FormButton = (props) => {
  return (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );
};

const FormInput = (props) => {
  return (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
};

const OtherMethods = (props) => {
  return (
    <div id="alternativeLogin">
      <Link to="/signup">SignUp</Link>
      <div id="iconGroup">
      </div>
    </div>
  );
};

export default LoginForm;
