import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";
import CardUserBasics from "../cardUserBasics";

import { List } from "antd";

const ListUserBasics = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(16, 5));
  }, []);

  return (
    <>
      <List
        style={{ background: "lightblue", padding: "1rem" }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "100%",
            }}
          >
            <CardUserBasics user={user} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListUserBasics;
