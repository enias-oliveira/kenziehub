import "./index.css";
import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <span className="wenner">
      <Modal
        visible={visible}
        title="Editar Trabalho"
        okText="Atualizar"
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
          <Form.Item name="title" label="Título">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Descrição">
            <Input />
          </Form.Item>
          <Form.Item name="deploy_url" label="URL">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </span>
  );
};

export const EditWork = ({ id, token }) => {
  const [visible, setVisible] = useState(false);
  const success = (messageSuccess) => {
    message.success(messageSuccess);
    window.location.reload();
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const getWork = (value, messageSuccess) => {
    const axios = require("axios");
    let config = {
      method: "put",
      url: `https://kenziehub.me/users/works/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: value,
    };

    axios(config)
      .then(() => success(messageSuccess))
      .catch((error) => erro(error.response.data.message));
  };

  const onCreate = (values) => {
    setVisible(false);
    const { title, description, deploy_url } = values;

    title && getWork({ title: title }, "Título atualizado com sucesso");
    description &&
      getWork({ description: description }, "Descrição atualizada com sucesso");
    deploy_url &&
      getWork({ deploy_url: deploy_url }, "Link atualizado com sucesso");
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Editar Trabalho
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
