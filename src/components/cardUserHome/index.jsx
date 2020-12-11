import { Card } from "antd";
const { Meta } = Card;

const CardUserHome = ({ user }) => {
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
          height: "22rem",
        }}
        cover={
          <img
            alt={`${user.name} avatar`}
            src={
              !!user.avatar_url
                ? user.avatar_url
                : "https://www.nicepng.com/png/full/73-730154_open-default-profile-picture-png.png"
            }
            width="177.062"
            height="177.062"
          />
        }
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

export default CardUserHome;
