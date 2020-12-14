import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProfileThunk } from "../../store/modules/profile/thunks";

import { Avatar, Typography, List, Card } from "antd";
import { FaLinkedin } from "react-icons/fa";
import { MdClass } from "react-icons/md";

const { Title, Text } = Typography;

const PerfilUser = ({ id, userLoged = true }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  // const id = "8b8e50a6-50c2-4718-b817-2d38cad0c8f4";

  useEffect(() => {
    dispatch(showProfileThunk(id));
  }, []);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar size={64} src={profile.avatar_url} />
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <Title level={3}>{profile.name}</Title>
          <Text>
            <FaLinkedin />{" "}
            <a href={`https://www.linkedin.com/in/${profile.contact}/`}>
              {profile.contact}
            </a>{" "}
            | {profile.bio}
          </Text>
          <Text>
            <MdClass />
            {""}
            {profile.course_module}
          </Text>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <Title level={4}>Tecnologias</Title>
        {userLoged && <button>ADD +</button>}
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={profile.techs}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.status}</Card>
              {userLoged && (
                <button onClick={() => console.log("ID: ", item.id)}>
                  Edit
                </button>
              )}
            </List.Item>
          )}
        />
        <Title level={4}>Works</Title>
        {userLoged && <button>ADD +</button>}

        <List
          itemLayout="horizontal"
          dataSource={profile.works}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.deploy_url}>{item.title}</a>}
                description={item.description}
              />
              {userLoged && (
                <button onClick={() => console.log("ID: ", item.id)}>
                  Edit
                </button>
              )}
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default PerfilUser;
