import React, { useState } from "react";
import { Button, Modal, Form, Radio, message } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Nova Tecnologia"
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
        <Form.Item
          name="status"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="Iniciante">Iniciante</Radio>
            <Radio value="Intermediário">Intermediário</Radio>
            <Radio value="Avançado">Avançado</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const EditTech = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const token = localStorage.getItem("authToken");

  const success = () => {
    message.success("Tecnologia atualizada com sucesso");
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onCreate = (values) => {
    setVisible(false);

    const axios = require("axios");
    let config = {
      method: "put",
      url: `https://kenziehub.me/users/techs/${id}`,
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
        Editar Tecnologia
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
