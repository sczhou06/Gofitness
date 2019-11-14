import React from "react";
import {Link} from "react-router-dom";
import {
  Form,
  Radio,
  Button,
  Input,
  Checkbox,
} from 'antd';



class SignUpForm extends React.Component {

  render() {
    const {getFieldDecorator} = this.props.form;
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
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="I'm a">
            {getFieldDecorator('radio-group')(
              <Radio.Group>
                <Radio value="trainer">trainer</Radio>
                <Radio value="trainee">trainee</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item label="First Name">
            <Input
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item label="E-mail">
            <Input
              placeholder="E-mail Address"
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item label="Classes">
            <Checkbox.Group>
              <Checkbox>Fitness</Checkbox>
              <Checkbox>Yoga</Checkbox>
              <Checkbox>Boxing</Checkbox>
              <Checkbox>Palates</Checkbox>
              <Checkbox>HIIT</Checkbox>
              <Checkbox>Taichi</Checkbox>
            </Checkbox.Group>
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

const WrappedRegistrationForm = Form.create({ name: 'register' })(SignUpForm);

export default WrappedRegistrationForm;
