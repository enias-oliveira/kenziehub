import { Form, Input, Button, Select, notification } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import rgx from "./data/validator";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 5,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 300,
    },
    sm: {
      span: 300,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 50,
      offset: 8,
    },
    sm: {
      span: 50,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const url = "https://kenziehub.me/users";

  const successNotification = () => {
    notification.open({
      message: "Registro efetuado com sucesso!",
      type: "success",
    });
  };

  const errorNotification = () => {
    notification.open({
      message: "Usuário não registrado!",
      type: "error",
      description: "E-mail já na base de dados. Erro 401.",
    });
  };

  const onFinish = (values) => {
    axios
      .post(url, values)
      .then((response) => {
        successNotification();
        history.push("/login");
      })
      .catch((error) => errorNotification());
  };

  return (
    <>
      <div className="form-register">
        <br />
        <br />
        <br />

        <h2 style={{ color: "white" }}>Faça parte da KenzieHub! </h2>
        <br />
        <br />
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label={<span>Email</span>}
            rules={[
              {
                required: true,
                message: "Seu email é requerido",
              },
              {
                whitespace: false,
                message: "Seu e-mail não pode conter espaços em branco",
              },
              {
                pattern: rgx.email,
                message: "Seu email não possui um formato válido",
              },
              {
                min: 7,
                message: "Seu email precisa conter mais que 7 caracteres",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="example@example.com" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span>Senha</span>}
            rules={[
              {
                required: true,
                message: "Por favor, você precisa inserir uma senha",
              },
              {
                whitespace: false,
                message: "Sua senha não pode possuir espaços",
              },
              {
                pattern: rgx.password,
                message:
                  "Sua senha precisa possuir uma letra maiúscula, uma minúscula, um número e um caracter especial",
              },
              {
                min: 6,
                message: "Sua senha precisa possuir ao menos 6 caracteres",
              },
              {
                max: 11,
                message: "Sua senha precisa possuir no máximo 11 caracteres",
              },
            ]}
            hasFeedback
          >
            <Input
              type="password"
              placeholder="insira sua senha no formato: Abcd1@"
            />
          </Form.Item>
          <Form.Item
            name="password-confirmation"
            label={<span>Confirmar senha</span>}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: `Por favor, confirme sua senha!`,
              },
              {
                min: 6,
                message: "Sua senha precisa possuir ao menos 6 caracteres",
              },
              {
                max: 11,
                message: "Sua senha precisa possuir no máximo 11 caracteres",
              },

              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(`As senhas não são iguais, reveja!`);
                },
              }),
            ]}
          >
            <Input type="password" placeholder="confirme sua senha" />
          </Form.Item>

          <Form.Item
            name="name"
            label={<span>Nome</span>}
            rules={[
              {
                required: true,
                message: "Por favor insira um nome",
              },
              {
                whitespace: true,
              },
              {
                pattern: rgx.name,
                message: "Seu nome somente poderá conter letras",
              },
              {
                min: 5,
                message: "Seu nome deve ter ao menos 5 caracteres",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Seu nome" />
          </Form.Item>
          <Form.Item
            name="bio"
            label={<span>Bio</span>}
            rules={[
              {
                required: true,
                message: "Sua bio é requerida",
              },
              {
                whitespace: true,
              },
              {
                min: 5,
                message: "Sua bio pode ser maior que 5 caracteres",
              },
              {
                max: 400,
                message: "Sua bio não pode possuir mais de 400 caracters",
              },
            ]}
          >
            <Input.TextArea placeholder="Uma breve descrição..." />
          </Form.Item>

          <Form.Item
            name="contact"
            label={<span>Linkedin</span>}
            rules={[
              {
                required: true,
                message: "Por favor insira o seu linkedin",
              },
            ]}
          >
            <Input placeholder="Seu linkedin" />
          </Form.Item>

          <Form.Item name="course_module" label="Curso">
            <Select>
              <Select.Option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </Select.Option>
              <Select.Option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </Select.Option>
              <Select.Option value=" Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </Select.Option>
              <Select.Option value="  Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button htmlType="submit">Cadastrar</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegistrationForm;
