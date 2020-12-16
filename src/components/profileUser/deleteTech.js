import { message, Popconfirm } from "antd";
import { useState } from "react";

export const DeleteTech = ({ id, token }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    onDelete();
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const success = () => {
    message.success("Tecnologia excluída com sucesso");
    window.location.reload();
  };

  const erro = (messageError) => {
    message.error(messageError);
  };

  const onDelete = () => {
    const axios = require("axios");
    let config = {
      method: "delete",
      url: `https://kenziehub.me/users/techs/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => success(response.data))
      .catch((error) => erro(error.response.data.message));
  };

  return (
    <div>
      <Popconfirm
        title="Deseja Deletar?"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <span
          style={{ cursor: "pointer" }}
          type="secondary"
          onClick={showPopconfirm}
        >
          x
        </span>
      </Popconfirm>
    </div>
  );
};
