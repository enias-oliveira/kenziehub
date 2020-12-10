import { Card } from "antd";

const { Meta } = Card;

const CardUser = ({ user }) => {
  return (
    <>
      <Card
        onClick={() => console.log("Card Clicked")}
        hoverable
        style={{ width: "100%", height: "10rem" }}
      >
        <Meta title={user.name} style={{ margin: "0.1rem" }} />
        <p style={{ margin: 0 }}>{user.course_module}</p>
      </Card>
    </>
  );
};

export default CardUser;
