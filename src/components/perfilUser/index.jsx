import { Avatar, Typography, List, Card } from "antd";
import { FaLinkedin } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const dataTech = [
  {
    title: "React",
    status: "Básico",
  },
  {
    title: "HTML",
    status: "Avançado",
  },
  {
    title: "CSS",
    status: "Básico",
  },
  {
    title: "Git",
    status: "Intermediário",
  },
];

const dataWork = [
  {
    title: "Collection",
    description: "Aplicação Web utilizando ReactJS",
    deploy_url: "https://collection-card.vercel.app/",
  },
  {
    title: "Collection",
    description: "Aplicação Web utilizando ReactJS",
    deploy_url: "https://collection-card.vercel.app/",
  },
  {
    title: "Collection",
    description: "Aplicação Web utilizando ReactJS",
    deploy_url: "https://collection-card.vercel.app/",
  },
  {
    title: "Collection",
    description: "Aplicação Web utilizando ReactJS",
    deploy_url: "https://collection-card.vercel.app/",
  },
];

const PerfilUser = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 20 }}>
          <Title level={3}>Brunno Lorran</Title>
          <Text>
            <FaLinkedin /> brunnolorran | Desenvolvedor Fron-End
          </Text>
        </div>
      </div>
      <div>
        <Title level={4}>Tecnologias</Title>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={dataTech}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.status}</Card>
            </List.Item>
          )}
        />
        <Title level={4}>Works</Title>
        <List
          itemLayout="horizontal"
          dataSource={dataWork}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.deploy_url}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default PerfilUser;
