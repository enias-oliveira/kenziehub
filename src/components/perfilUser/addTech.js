import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio, message } from "antd";

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
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          status: "Iniciante",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
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
          name="status"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="Iniciante" checked={true}>
              Iniciante
            </Radio>
            <Radio value="Intermediário">Intermediário</Radio>
            <Radio value="Avançado">Avançado</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const AddTech = ({ token }) => {
  const [visible, setVisible] = useState(false);

  const success = ({ title, status }) => {
    message.success(`Sucesso - ${title}: ${status}`);
    window.location.reload();
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onCreate = (values) => {
    setVisible(false);

    const axios = require("axios");
    let config = {
      method: "post",
      url: "https://kenziehub.me/users/techs/",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: values,
    };
    axios(config)
      .then((response) => success(response.data))
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
        Nova Tecnologia
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
