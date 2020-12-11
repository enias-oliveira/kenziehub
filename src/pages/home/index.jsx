import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showUsersThunk } from "../../store/modules/usersBasics/thunks";
import NavBar from "../../components/navbar";
import ListUser from "../../components/listUser";
import axios from "axios";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [infoLoged, setInfoLoged] = useState({});
  const idLoged = localStorage.getItem("idLoged");
  // console.log("IDLoged: ", idLoged);

  useEffect(() => {
    dispatch(showUsersThunk(16, 5));

    axios.get(`https://kenziehub.me/users/${idLoged}`).then((res) => {
      console.log("UserLoged: ", res.data);
      setInfoLoged(res.data);
    });
  }, [idLoged]);

  // console.log("Home: ", users);
  // console.log("State: ", infoLoged);

  return (
    <Container>
      <NavBar />

      <main>
        <Perfil>
          <Link to="/profile">
            <div className="img">
              <img
                src={
                  infoLoged.avatar_url
                    ? infoLoged.avatar_url
                    : "https://raw.githubusercontent.com/hom-bahrani/react-profile-card/master/src/placeholder.png"
                }
                alt="user"
              />
            </div>
          </Link>
          <div className="name">{infoLoged.name}</div>
          <Link className="editar">editar perfil</Link>
        </Perfil>
        <TimeLine>
          <ListUser users={users} basic={true} />
        </TimeLine>
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: #f7f7f7;

  main {
    display: flex;
  }
`;

const Perfil = styled.div`
  display: flex;
  flex-flow: column;
  margin: 20px;
  background: yellow;
  width: 200px;
  height: 100%;

  .img {
    width: 200px;
    height: 200px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  .name {
    text-align: center;
    margin: 5px;
  }

  .editar {
    color: #323232;
    text-align: center;
  }
`;

const TimeLine = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 20px 20px 0 0;
  background: #3b00ff;
  max-height: 100vh;
`;
