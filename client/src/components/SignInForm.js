import React from "react";
import { Form, Icon, Input, Button } from 'antd';
import {Link} from "react-router-dom"
import GoogleAuth from "./GoogleAuth";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = (e) => {

  }

  setUserInfo(event, key) {
    let obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="signInForm">
        <Form className="login-form">
          <div id="form-logo"><a href="/flagcamp/gofitness-web/">{'Welcome Back!'}</a></div>
          <Form.Item>
            <Input
              className="formInput"
              prefix={<Icon type="user" className="signInIcon" />}
              placeholder="Username"
              type="text" onChange={ (e) => {
                this.setUserInfo(e, "email")
            }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              className="formInput"
              prefix={<Icon type="lock" className="signInIcon" />}
              type="password" onChange={ (e) => {
                this.setUserInfo(e, "password")
            }}
              placeholder="Password"

            />
          </Form.Item>
          <Form.Item className="register-link">
            <Button type="submit" onClick={ () => {
              alert(this.state.email + ":" + this.state.password);
            }}
                    className="login-form-button">
              Log in
            </Button>

            <p> Or <Link to="/signup">register now!</Link> </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SignInForm;
