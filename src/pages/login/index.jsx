import { Form, Input, Button, message } from "antd";
import styled from "styled-components";

import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const url = "https://kenziehub.me/sessions";

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const success = () => {
    message.success("Login Sucess");
  };

  const error = (info) => {
    message.error(info);
  };

  const onFinish = (value) => {
    axios
      .post(url, value)
      .then((res) => {
        console.log("Resposta: ", res.data);
        window.localStorage.setItem("authToken", res.data.token);
        success();
        history.push("/profile-users");
      })
      .catch((err) => error(err.response.data.message));
  };

  return (
    <Container>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input placeholder="example@example.com" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="@Password123" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>{" "}
          Or <a href="/register">register</a>
        </Form.Item>
      </Form>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
`;

export default Login;
