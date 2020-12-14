import { List } from "antd";
import CardUserBasics from "../../components/cardUserBasics";

const ListUserBasics = ({ users }) => {
  return (
    <>
      <List
        style={{ background: "lightblue", padding: "1rem" }}
        grid={{
          gutter: 15,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
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
            <CardUserBasics user={user} />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListUserBasics;
