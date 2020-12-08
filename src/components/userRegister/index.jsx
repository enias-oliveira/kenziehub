import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import rgx from "./data/validator";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

const RegistrationForm = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const url = "https://kenziehub.me/users";

  const onFinish = (values) => {
    console.log("Values received from form registration", values);

    axios
      .post(url, values)
      .then((response) => {
        console.log("user successful registration", response);
        history.push("/");
      })
      .catch((error) =>
        alert("Seu e-mail já está registrado na base de dados")
      );
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <div className="form-register">
        <h3>Cadastre-se em nossa plataforma</h3>
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
            <Input placeholder="seuemail@email.com" />
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
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegistrationForm;
