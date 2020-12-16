import { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Alterar Senha"
      okText="Alterar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="old_password"
          label="Senha Antiga"
          rules={[
            {
              required: true,
              message: "Insira sua senha antiga!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="password"
          label="Nova Senha"
          rules={[
            {
              required: true,
              message: "Insira a nova senha!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirmar Senha"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirme a nova senha!",
            },
            ({ getFieldValue }) => ({
              validator(_rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("As senhas são diferentes!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const EditPassword = () => {
  const history = useHistory();
  const token = localStorage.getItem("authToken");
  const [visible, setVisible] = useState(false);
  const success = () => {
    message.success("Senha alterada com sucesso!");
    localStorage.clear();
    history.push("/login");
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onCreate = (values) => {
    setVisible(false);

    const axios = require("axios");
    let config = {
      method: "put",
      url: `https://kenziehub.me/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: values,
    };

    axios(config)
      .then(success)
      .catch((error) => erro(error.response.data.message));
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Editar Senha
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
