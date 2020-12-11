import { Card } from "antd";
const { Meta } = Card;

const CardUserHome = ({ user }) => {
  return (
    <>
      <Card
        onClick={() => console.log("Card Clicked")}
        hoverable
        cover={
          <img
            alt={`${user.name} avatar`}
            src={
              !!user.avatar_url
                ? user.avatar_url
                : "https://www.nicepng.com/png/full/73-730154_open-default-profile-picture-png.png"
            }
            style={{ height: "15rem" }}
          />
        }
        style={{ height: "23rem", width: "15rem" }}
      >
        <Meta title={user.name} description={user.course_module} />
        {!!user.title && (
          <p>
            {user.title}: {user.status}
          </p>
        )}
      </Card>
    </>
  );
};

export default CardUserHome;
