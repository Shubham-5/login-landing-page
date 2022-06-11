import { Checkbox, Form, Input, Button } from "antd";
import "./LoginForm.css";
const LoginForm = ({ onFinishFailed, onFinish }) => {
  return (
    <>
      <Form
        method='POST'
        name='normal_login'
        className='login-form'
        initialValues={{ remember: false }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}>
        <Form.Item
          name='username'
          rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input placeholder='Email Address*' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input type='password' placeholder='Password*' />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            type='primary'
            className='login-form-button'>
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
