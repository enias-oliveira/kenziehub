import { List } from "antd";
import CardUserHome from "../../components/cardUserHome";

const ListUserHome = ({ users, currentPage, setPage }) => {
  return (
    <>
      <List
        style={{ padding: "2rem" }}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        pagination={{
          onChange: (page) => setPage(page),
          pageSize: 12,
          current: currentPage,
          total: 300,
          background: "blue",
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
