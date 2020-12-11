import GlobalStyle from "./styles/global";
import RegistrationForm from "./components/userRegister";
import Profile from "./pages/perfil";
import Login from "./pages/login";
import NavBar from "./components/navbar"
import CarouselSlider from "./components/sliderCarousel";
import Home from "./pages/home";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <NavBar/>
      <CarouselSlider />
      <div id="main-container">
        <h1>KenzieHub</h1>
        <Switch>
          <Route exact path="/">
            Landing Page Home
            <p>/</p>
            <p>/login</p>
            <p>/register</p>
            <p>/profile</p>
            <p>/home</p>
            <p>/profile-users</p>
          </Route>
          <Route path="/login">
            Login
            <Login />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            Home
            <Home />
          </Route>
          <Route path="/profile-users">Profile Users</Route>
        </Switch>
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
