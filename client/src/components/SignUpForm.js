import React from "react";
import {Link} from "react-router-dom"
import {
  Form,
  Radio,
  Button,
} from 'antd';


class SignUpForm extends React.Component {

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div className="signUpForm">
        <Form {...formItemLayout}>
          <Form.Item label="I'm a">
            <Radio.Group>
              <Radio value="trainer">trainer</Radio>
              <Radio value="trainee">trainee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>

    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })("SignUpForm");


export default SignUpForm;
