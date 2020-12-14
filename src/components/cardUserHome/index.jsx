import { Card } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const CardUserHome = ({ user }) => {
  const history = useHistory();

  const getIdCard = (id) => {
    console.log("CardUsers ", id);
    localStorage.setItem("idCommunity", id);
    history.push("/profile-users");
  };
  return (
    <>
      <Card
        onClick={() => getIdCard(user.id)}
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
