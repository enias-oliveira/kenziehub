import { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import ProfileUsers from "./pages/profileUsers";

import { Switch, Route } from "react-router-dom";
const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setAuthenticate(false);
    } else {
      setAuthenticate(true);
    }
  }, [setAuthenticate]);

  if (authenticate === undefined) {
    return (
      <>
        <div>Loading..</div>
        <GlobalStyle></GlobalStyle>
      </>
    );
  }

  if (authenticate === false) {
    return (
      <>
        <div id="main-container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
        <GlobalStyle></GlobalStyle>
      </>
    );
  }

  return (
    <>
      <div id="main-container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile-users">
            <ProfileUsers />
          </Route>
        </Switch>
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
