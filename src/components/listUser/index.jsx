import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";
import CardUser from "../cardUser";

import { List } from "antd";

const ListUser = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(15, 6));
  }, []);

  return (
    <>
      <List
        style={{ background: "lightblue", padding: "1rem" }}
        grid={{
          gutter: 15,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 5,
          xl: 5,
          xxl: 5,
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
            <CardUser user={user} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListUser;
