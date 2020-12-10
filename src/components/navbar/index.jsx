import "antd/dist/antd.css";
import "./index.css";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="logo">
          <img
            id="logomarca"
            src="https://i.postimg.cc/fT1tFz04/logoMini.png"
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
    </div>
  );
};
export default NavBar;
