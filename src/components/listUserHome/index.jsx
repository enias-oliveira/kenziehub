import { List } from "antd";
import CardUserHome from "../../components/cardUserHome";

const ListUserHome = ({ users }) => {
  return (
    <>
      <List
        style={{ background: "blue", padding: "1rem" }}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
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
            <CardUserHome user={user} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListUserHome;
