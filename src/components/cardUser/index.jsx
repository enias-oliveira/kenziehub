import { Card } from "antd";

const { Meta } = Card;

const CardUser = ({ user }) => {
  return (
    <>
      <Card
        onClick={() => console.log("Card Clicked")}
        hoverable
        style={{ width: 250 }}
      >
        <Meta title={user.name} />
        <p>Title: {user.title}</p>
        <p>Status: {user.status}</p>
      </Card>
    </>
  );
};

export default CardUser;
