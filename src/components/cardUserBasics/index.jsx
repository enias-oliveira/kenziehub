import { Card } from "antd";

const { Meta } = Card;

const CardUserBasics = ({ user }) => {
  return (
    <>
      <Card
        onClick={() => console.log("Card Clicked")}
        hoverable
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-evenly",
          width: "100%",
          height: "10rem",
        }}
      >
        <Meta
          title={user.name}
          style={{ margin: "0.1rem" }}
          description={user.course_module}
        />
        {!!user.title && (
          <p style={{ margin: 0, paddingTop: "0.25rem" }}>
            {user.title}: {user.status}
          </p>
        )}
      </Card>
    </>
  );
};

export default CardUserBasics;
