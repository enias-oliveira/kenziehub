import { useState, useEffect } from "react";
import { List } from "antd";
import CardUserHome from "../../components/cardUserHome";

import axios from "axios";

const ListUserHome = ({ users, currentPage, setPage }) => {
  const [totalUsers, setTotalUsers] = useState(0);

  const getTotalUsers = () => {
    axios
      .get("https://kenziehub.me/users?perPage=1000000&page=1")
      .then((response) => setTotalUsers(response.data.length));
  };

  useEffect(() => {
    getTotalUsers();
  });

  return (
    <>
      <List
        style={{ padding: "2rem" }}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        pagination={{
          onChange: (page) => setPage(page),
          pageSize: 12,
          current: currentPage,
          total: totalUsers,
          showSizeChanger: false,
        }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardUserHome user={user} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListUserHome;
