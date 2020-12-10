import { useSelector, useDispatch } from "react-redux";
import { showUsersThunk } from "../../store/modules/usersBasics/thunks";
import CardUser from "../cardUser";

import { List } from "antd";

const ListUser = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  dispatch(showUsersThunk());

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
          xl: 6,
          xxl: 3,
        }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
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
