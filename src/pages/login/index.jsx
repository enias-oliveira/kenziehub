import { Form, Input, Button, message } from "antd";
import styled from "styled-components";

import axios from "axios";
import { useHistory } from "react-router-dom";

import NavBar from "../../components/navbar";


const Login = () => {
  const history = useHistory();
  const url = "https://kenziehub.me/sessions";

  const layout = {
    labelCol: { span: 250 },
    wrapperCol: { span: 216 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "Seu e-mail é invalido",
      number: "${label} is not a valid number!",
    },
  };

  const success = () => {
    message.success("Login realizado com sucesso!");
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

        window.localStorage.setItem("idLoged", res.data.user.id);

        success();
        history.push("/home");
      })
      .catch((err) => error(err.response.data.message));
  };

  return (
    <>
      <NavBar />

      <Container>
                <h2 style={{ color: "white" }}>
          Logue-se agora mesmo!{" "}
          
        </h2>
        <br />
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
            label="Senha"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, você precisa inserir uma senha",
              },
            ]}
          >
            <Input.Password placeholder="Insira aqui a sua senha" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button htmlType="submit">Login</Button>
            <Button
              onClick={() => {
                history.push("/register");
              }}
            >
              {" "}
              Cadastrar-se
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};

export const Container = styled.div`
margin-top:50px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
  
`;

export default Login;
