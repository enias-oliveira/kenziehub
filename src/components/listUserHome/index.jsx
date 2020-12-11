import { List } from "antd";
import CardUserHome from "../../components/cardUserHome";

const ListUserHome = ({ users, currentPage, setPage }) => {
  return (
    <>
      <List
        style={{ background: "blue", padding: "1rem" }}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        pagination={{
          onChange: (page) => setPage(page),
          pageSize: 12,
          current: currentPage,
          total: 200,
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
