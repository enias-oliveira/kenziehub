import "antd/dist/antd.css";
import "./index.css";
import { Menu, Layout } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import {useState} from "react"

const NavBar = () => {
  const history = useHistory();
  const location = useLocation()
  const [token, setToken] = useState(false)
  const path = location.pathname


const cleanStorage = () => {
  localStorage.idLoged = null;
  history.push("/");
  console.log("Storage is cleaned");
};

  const checkToken = () => {
    if (localStorage.idLoged === undefined) {
      setToken(false);
      return false;
    }
    {
      setToken(true);
      return true;
    }
  };
  

  return (
    <div>
      <Layout>
        
        
        
        
      
          <Menu mode="horizontal" defaultSelectedKeys={["/"]} selectedKeys={[location.pathname]}>
            
            {(((path === "/" ) || (path === "/register") || (path === "/login"))) && checkToken && (<Menu.Item key="logo"> <img id="logomarca" src="https://i.postimg.cc/8zT15c9g/logo-Mini-white.png" alt="oi" onClick={() => {history.push("/")}}/></Menu.Item>)}
            {(((path === "/" ) || (path === "/register") || (path === "/login"))) && checkToken && (<Menu.Item key="login" onClick={() => {history.push("/login")}}>Login</Menu.Item>)}
            {(((path === "/" ) || (path === "/register") || (path === "/login"))) && checkToken && (<Menu.Item key="register" onClick={() => {history.push("/register")}}>Cadastro</Menu.Item>)}

            {(path === "/home" )  && checkToken && (<Menu.Item key="logog"> <img id="logomarca" src="https://i.postimg.cc/8zT15c9g/logo-Mini-white.png" alt="oi" onClick={() => {history.push("/")}}/></Menu.Item>)}
            {(path === "/home" )  && checkToken && (<Menu.Item key="home" onClick={() => {history.push("/home")}}>Dashboard</Menu.Item>)}
            {(path === "/home" )   && checkToken && (<Menu.Item key="logoff" onClick={cleanStorage}>Logoff</Menu.Item>)}

          </Menu>
      
      </Layout>
    </div>
  );
};
export default NavBar;
