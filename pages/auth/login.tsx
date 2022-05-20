import { useState,useContext } from 'react';
import type { NextPage } from 'next'
import { Form, Input, Button, Checkbox } from 'antd';
import { AuthContext } from '../../context';
import { useRouter } from 'next/router';

interface data{
email: string;
password: string;
}


const LoginPage:NextPage = () => {
    const router=useRouter();
const [dataUser, setDataUser] = useState({})
const {loginUser}=useContext(AuthContext);





    const onFinish = async(values: data) => {
 const isValidLogin = await loginUser(values.email, values.password);   
router.replace('/')
        
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  return (
      <div style={{width:400,margin:'100px auto'}}>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
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
  </div>
  )
}

export default LoginPage