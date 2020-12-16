import { Navbar, Form, Nav } from "react-bootstrap";
import "./index.css";
import { useHistory, useLocation} from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useState(false);
  const path = location.pathname;

  const cleanStorage = () => {
   localStorage.clear(); 
    // localStorage.idLoged = null;
    // localStorage.authToken = null;
      history.push("/");
    console.log("Storage is cleaned");
  };

  const checkToken = () => {
    if (localStorage.authToken === undefined) {
      setToken(false);
      return false;
    } else {
      setToken(true);
      return true;
    }
  };

  let storage = localStorage.getItem("authToken")

  return (
    <>
      <div className="layout-navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand            onClick={() => {
              history.push("/") ;
            }}
          >
            <img
              alt="logo kenziehub"
              src="https://i.postimg.cc/8zT15c9g/logo-Mini-white.png"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto"></Nav>
            <Form inline>



              {(path === "/" || path === "/register" || path === "/login")  && !storage && (<Nav.Link key="login" onClick={() => {history.push("/login")}}>LOGIN</Nav.Link>)}
              {(path !== "/" || path !== "/register" || path !== "/login") && !storage && (<Nav.Link key="register" onClick={() => {history.push("/register")}}>CADASTRO</Nav.Link>)}
              {(path !== "/" || path !== "/register" || path !== "/login") && storage && (<Nav.Link key="home" onClick={() => {history.push("/home")}}>DASHBOARD</Nav.Link>)}
              {((path !== "/" || path !== "/register" || path !== "/login")) && storage && (<Nav.Link key="logoff" onClick={cleanStorage}>LOGOFF</Nav.Link>)}</Form>

          </Navbar.Collapse>

        </Navbar>
      </div>
    </>
  );
};
export default NavBar;
