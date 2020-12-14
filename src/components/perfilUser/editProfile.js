import React, { useState } from "react";
import { Button, Modal, Form, Input, message, Select } from "antd";
import { EditPassword } from "./editPassword";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Informações Pessoais"
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
        <Form.Item name="name" label="Nome">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
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
        <Form.Item name="bio" label="Biografia">
          <Input />
        </Form.Item>
        <Form.Item name="contact" label="Contato">
          <Input />
        </Form.Item>
        <EditPassword />
      </Form>
    </Modal>
  );
};

export const EditProfile = ({ id, token }) => {
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
      url: `https://kenziehub.me/profile`,
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
    const { name, email, course_module, bio, contact } = values;

    name && getWork({ name: name }, "Nome atualizado com sucesso");
    email && getWork({ email: email }, "Email atualizado com sucesso");
    course_module &&
      getWork({ course_module: course_module }, "Curso atualizado com sucesso");
    bio && getWork({ bio: bio }, "Biografia atualizada com sucesso");
    contact && getWork({ contact: contact }, "Contato atualizado com sucesso");
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Editar Perfil
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
