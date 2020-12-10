import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";

const Profile = () => {
  const [info, setInfo] = useState({});

  const getInfo = () => {
    axios
      .get("https://kenziehub.me/users/d0d5ffe0-1676-4515-9254-36192c587232")
      .then((res) => setInfo(res.data));
    // .catch((res) => console.log(res));
  };

  useEffect(getInfo, []);

  return (
    <div>
      <Col span={24} style={{ backgroundColor: "lightblue", height: "80vh" }}>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            xxl={8}
            style={{
              backgroundColor: "pink",
              height: "50vh",
              margin: "10% 0",
            }}
          >
            <img
              src="https://raw.githubusercontent.com/hom-bahrani/react-profile-card/master/src/placeholder.png"
              alt="Avatar"
              style={{ width: "80%", margin: "10%" }}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
            xxl={16}
            style={{ backgroundColor: "purple", height: "80vh" }}
          >
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              xxl={24}
              style={{ backgroundColor: "SlateBlue", height: "50%" }}
            >
              <p>Name {info.name}</p>
              <p>Module {info.course_module}</p>
              <p>Contact {info.contact}</p>
              <p>Techs {info.techs}</p>
              <p>Works {info.works}</p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              xxl={24}
              style={{ backgroundColor: "orange", height: "50%" }}
            >
              <p>Bio {info.bio}</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                pariatur ut obcaecati voluptates saepe doloremque fugiat dolore
                expedita eum consequuntur voluptas quos ad totam veniam animi,
                cumque quo quia vel. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Fuga pariatur ut obcaecati voluptates saepe
                doloremque fugiat dolore expedita eum consequuntur voluptas quos
                ad totam veniam animi, cumque quo quia vel. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Fuga pariatur ut
                obcaecati voluptates saepe doloremque fugiat dolore expedita eum
                consequuntur voluptas quos ad totam veniam animi, cumque quo
                quia vel. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Fuga pariatur ut obcaecati voluptates saepe doloremque
                fugiat dolore expedita eum consequuntur voluptas quos ad totam
                veniam animi, cumque quo quia vel.
              </p>
            </Col>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Profile;
