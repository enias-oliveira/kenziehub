import GlobalStyle from "./styles/global";

import RegistrationForm from "./components/userRegister";
import NavBar from "./components/navbar";
import CarouselSlider from "./components/sliderCarousel";

import Home from "./pages/home";
import Profile from "./pages/perfil";
import Login from "./pages/login";
import LandingPage from "./pages/landing-page";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <div id="main-container">
        <h1>KenzieHub</h1>
        <Switch>
          <Route exact path="/">
            Landing Page Home
            <LandingPage />
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
