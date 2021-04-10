import React,{useEffect, useState} from "react";
import TextInput from "../../components/Custom/TextInput";
import Button from "../../components/Custom/Button";
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'
import {getUserAsync, setUser} from '../../store/userAccount/userAction'
import "./style.css";

const SignIn = (props) => {
  const { register, handleSubmit } = useForm();
  const [users,setUsers] = useState();

  const isAuth = (data) => {
     accountList();
    console.log({users});
  };

  const accountList = () => {
     props.getUser();
    setUsers(props.users.user);
  }


  return (
    <div className="loginContainer">
      <div className="login">
        <div className="leftLogin">
          <div className="logoLogin">
            <img src="/static/dino.png" alt="" />
            <h1>JURASSIC PARK</h1>
          </div>
          <div className="contentLogin">
            <div className="inputs">
              <label htmlFor="username">
                <i className="fas fa-user-injured"></i>
              </label>
              <TextInput
                type="text"
                TextID="username"
                placeholder="Username"
                reference={register}
              />
            </div>
            <div className="inputs">
              <label htmlFor="username">
                <i className="fas fa-eye"></i>
              </label>
              <TextInput
                type="password"
                TextID="Password"
                reference={register}
                placeholder="Password"
              />
            </div>
            <Button
              onClick={handleSubmit(isAuth)}
              textButton="Sign In"
            />
          </div>
          <div className="forgot"></div>
        </div>
        <div className="rightLogin">
          <div className="memesLogin"></div>
          <div className="signUp">
            <h3>Create Account</h3>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  getUser:getUserAsync
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
