import {FC} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Register:FC= () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return <Form
  name="basic"
  labelCol={{ span: 8 }}
  wrapperCol={{ span: 16 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
   
    
    name="username"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input  placeholder="Username" />
  </Form.Item>

  <Form.Item
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    
    <Input.Password placeholder="Password" />
  </Form.Item>

  <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
}

export default Register
