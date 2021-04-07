import React from "react";
import TextInput from "../../components/Custom/TextInput";
import Button from "../../components/Custom/Button";
import { useForm } from "react-hook-form";
import "./style.css";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const isLogin = (data) => {
      console.log(data);
  };

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
              onClick={handleSubmit(isLogin)}
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

export default SignIn;
