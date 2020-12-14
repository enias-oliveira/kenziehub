import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Nova Tecnologia"
      okText="Criar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="title"
          label="Título"
          rules={[
            {
              required: true,
              message: "Adicione um título",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Descrição"
          rules={[
            {
              required: true,
              message: "Adicione uma descrição",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="deploy_url"
          label="URL"
          rules={[
            {
              required: true,
              message: "Adicione a URL do projeto",
            },
          ]}
        >
          <Input placeholder={"https://kenziehub.me"} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const AddWork = ({ token }) => {
  const [visible, setVisible] = useState(false);

  const success = () => {
    message.success("Trabalho criado com sucesso");
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onCreate = (values) => {
    setVisible(false);

    const axios = require("axios");
    let config = {
      method: "post",
      url: "https://kenziehub.me/users/works/",
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
        Novo Projeto
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
