import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProfileThunk } from "../../store/modules/profile/thunks";

import { Typography, List, Card } from "antd";
import { FaLinkedin } from "react-icons/fa";
import { MdClass } from "react-icons/md";

import "./index.css"

import { AddTech } from "./addTech";
import { EditTech } from "./editTech";
import { DeleteTech } from "./deleteTech";
import { AddWork } from "./addWork";
import { EditWork } from "./editWork";
import { DeleteWork } from "./deleteWork";
import { EditProfile } from "./editProfile";
import { EditAvatar } from "./editAvatar";

const { Title, Text } = Typography;

const PerfilUser = ({ id, userLoged = true }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    dispatch(showProfileThunk(id));
  }, []);

  return (
    <>
      <div
        className="profile-user"
        style={{ display: "flex", alignItems: "center" }}
      >
        <EditAvatar
          id={id}
          token={token}
          profileAvatarUrl={profile.avatar_url}
        />
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Title level={3}>{profile.name}</Title>
          <Text>
            <FaLinkedin />{" "}
            <a href={`https://www.linkedin.com/in/${profile.contact}/`}>
              Meu Linkedin
            </a>{" "}
            <br/>{profile.bio}
          </Text>
          <Text>
            <MdClass />
            {""}
            {profile.course_module}
          </Text>
          {userLoged && <EditProfile id={id} token={token} />}
        </div>
      </div>

      <div className="techs-and-works">
        <div style={{ marginTop: 20 }}>
          <Title level={4}>Tecnologias</Title>
          {userLoged && <AddTech token={token} />}
          <List
            grid={{
              gutter: 16,
              column: 4,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
              xxl: 5,
            }}
            dataSource={profile.techs}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.title}
                  extra={userLoged && <DeleteTech id={item.id} token={token} />}
                >
                  {item.status}
                </Card>
                {userLoged && <EditTech id={item.id} token={token} />}
              </List.Item>
            )}
          />
          <Title level={4}>Works</Title>
          {userLoged && <AddWork token={token} />}

          <List
            itemLayout="horizontal"
            dataSource={profile.works}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href={item.deploy_url}>{item.title}</a>}
                  description={item.description}
                />
                {userLoged && <DeleteWork id={item.id} token={token} />}
                {userLoged && <EditWork id={item.id} token={token} />}
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PerfilUser;
