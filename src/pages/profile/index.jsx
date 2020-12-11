import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Tag, Card, Modal } from "antd";
import styled from "styled-components";
import NavBar from "../../components/navbar";

const Profile = () => {
  const [info, setInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const idLoged = localStorage.getItem("idLoged");
  //id Wenner -> d0d5ffe0-1676-4515-9254-36192c587232
  //id with techs and works -> 8b8e50a6-50c2-4718-b817-2d38cad0c8f4
  const getInfo = () => {
    axios
      .get(`https://kenziehub.me/users/8b8e50a6-50c2-4718-b817-2d38cad0c8f4`)
      .then((response) => setInfo(response.data));
  };

  useEffect(getInfo, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <NavBar />
      {info.id && (
        <Col
          span={24}
          style={{
            backgroundColor: "#193c48",
            minHeight: "80vh",
          }}
        >
          <Row>
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              style={{
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
              style={{ minHeight: "80vh" }}
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={24}
                style={{
                  padding: "15px",
                  minHeight: "50%",
                }}
              >
                <button onClick={() => console.log(info)}>Wenner</button>
                <Paragraph className="course_module">
                  {info.course_module}
                </Paragraph>
                <Paragraph className="name">{info.name}</Paragraph>
                <Paragraph className="contact">{info.contact}</Paragraph>
                <Paragraph className="techs">
                  {info.techs.map(({ id, status, title }) => (
                    <Cards
                      key={id}
                      title={`${title}`}
                      bordered={true}
                      // loading={true}
                      hoverable={true}
                      actions={[
                        <span onClick={(() => console.log(title), showModal)}>
                          Edit
                        </span>,
                      ]}
                      extra={"x"}
                    >
                      {status}
                      <Modal
                        title="Basic Modal"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        mask={true}
                      >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                      </Modal>
                    </Cards>
                  ))}
                </Paragraph>
                <Paragraph className="works">
                  {info.works.map(({ id, title, deploy_url, description }) => (
                    <Tag
                      onClick={() =>
                        console.log(id, title, deploy_url, description)
                      }
                      color="default"
                      key={id}
                      className="tag"
                    >
                      {title}
                    </Tag>
                  ))}
                </Paragraph>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={24}
                style={{
                  padding: "15px",
                  minHeight: "50%",
                }}
              >
                <Paragraph className="bio">{info.bio}</Paragraph>
              </Col>
            </Col>
          </Row>
        </Col>
      )}
    </Container>
  );
};

export default Profile;

export const Container = styled.div`
  margin: 0;
  .name {
    /* background-color: red; */
    font-size: 18px;
  }

  .course_module {
    /* background-color: red; */
  }
  .contact {
    /* background-color: red; */
  }
  .techs {
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .works {
    /* background-color: red; */
  }
  .bio {
    /* background-color: red; */
  }

  .tag {
  }
`;

export const Paragraph = styled.div`
  /* margin: 20px; */
`;

export const Cards = styled(Card)`
  width: 40%;
  margin: 15px 0;
`;
