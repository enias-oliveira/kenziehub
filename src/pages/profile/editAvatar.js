import { useState } from "react";
import { Avatar, Modal, Form, message } from "antd";

export const EditAvatar = ({ token, profileAvatarUrl }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  var data = new FormData();

  const success = () => {
    message.success("Foto de perfil alterada com sucesso!");
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onCreate = (data) => {
    setVisible(false);

    const axios = require("axios");
    let config = {
      method: "patch",
      url: `https://kenziehub.me/users/avatar`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(success)
      .catch((error) => erro(error.response.data.message));
  };

  return (
    <div>
      <Avatar
        size={64}
        src={profileAvatarUrl}
        onClick={() => {
          setVisible(true);
        }}
        style={{ cursor: "pointer" }}
      />
      <Modal
        visible={visible}
        title="Nova foto de perfil"
        okText="Alterar"
        cancelText="Cancelar"
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => onCreate(data)}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <input
            type="file"
            id="avatar"
            onChange={(e) => data.append("avatar", e.target.files[0])}
          />
        </Form>
      </Modal>
    </div>
  );
};
