import "antd/dist/antd.css";
import "./index.css";
import { Menu, Layout } from "antd";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <Layout>
        <Menu mode="horizontal">
          <Menu.Item key="logo">
            <img
              id="logomarca"
              src="https://i.postimg.cc/8zT15c9g/logo-Mini-white.png"
              alt="oi"
              onClick={() => {
                history.push("/");
              }}
            />
          </Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Menu.Item>
          <Menu.Item
            key="register"
            onClick={() => {
              history.push("/register");
            }}
          >
            Cadastro
          </Menu.Item>
        </Menu>
      </Layout>
    </div>
  );
};
export default NavBar;
