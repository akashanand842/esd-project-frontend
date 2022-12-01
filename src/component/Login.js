import React, { useState } from 'react'
import Home from './Home';
//import { Button, Checkbox, Form, Input } from 'antd';
import {
  Form,
  Input,
  Button,
  Cascader,
  Divider,
  Row,
  Typography,
  Layout,
  message,
  Modal,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from 'axios';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;



function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const gotohome = async () => {

    console.log(userID);

    try {
      const response = await axios.post("http://localhost:8080/esd-1.0-SNAPSHOT/api/employee/employeeLogin",
        {
          "userId": userID,
          "password": password
        });

      console.log(response.status);
      if (response.status != 200) {
        alert("INVALID LOGIN\nPlease click OK");
        <Login />
      }
      else {
        setauthenticated(true);
        window.location.replace("home");
      }
    }
    catch (e) {
      alert("Connection Error !!!");
    }
  }

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white", backgroundRepeat: 'no-repeat' }}>
      <Content>
        <div>
          <Row justify="center" align="bottom">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Title className="center_title" level={3}>
                Login by Admin Department
              </Title>
              <Divider plain>Login</Divider>
              <Form.Item
                name="loginId"
                rules={[
                  { required: true, message: "Please input your LoginID!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="loginId" onChange={(e) => setUserID(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button" onClick={() => gotohome()}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      </Content>
    </Layout>
  );

}
export default Login