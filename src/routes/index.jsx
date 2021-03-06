import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import GlobalStyle from "../styles/global";
import LandingPage from "../pages/landingPage";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Profile from "../pages/profile";
import ProfileUsers from "../pages/profileUsers";

import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAuthenticateTrue,
  handleAuthenticateFalse,
} from "../store/modules/authenticate/actions";

const Routes = () => {
  const dispatch = useDispatch();
  const authenticator = useSelector((state) => state.authenticator);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token === (undefined || null)) {
      dispatch(handleAuthenticateFalse);
    } else {
      dispatch(handleAuthenticateTrue);
    }
  }, [dispatch]);

  if (authenticator === undefined) {
    return (
      <>
        <div>Loading..</div>
        <GlobalStyle></GlobalStyle>
      </>
    );
  }

  if (authenticator === false) {
    history.push("/");
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/profile-users">
            <ProfileUsers />
          </Route>
          <Route exact path="/profile-users/:id" component={ProfileUsers}>
            <ProfileUsers />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default Routes;
