import { Card } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const CardUserHome = ({ user }) => {
  const history = useHistory();

  const handleHomeCardClick = () => {
    localStorage.setItem("idCommunity", user.id);
    history.push("/profile-users");
  };

  return (
    <>
      <Card
        onClick={handleHomeCardClick}
        hoverable
        cover={
          <img
            alt={`${user.name} avatar`}
            src={
              !!user.avatar_url
                ? user.avatar_url
                : "https://www.nicepng.com/png/full/73-730154_open-default-profile-picture-png.png"
            }
            style={{ height: "11rem", width: "11rem", margin: "1rem auto" }}
          />
        }
        style={{ height: "24rem", width: "14rem" }}
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
