import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";

import ListUserHome from "../../components/listUserHome";
import NavBar from "../../components/navbar";

import styled from "styled-components";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [infoLoged, setInfoLoged] = useState({});
  const idLoged = localStorage.getItem("idLoged");
  // console.log("IDLoged: ", idLoged);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(showUsersThunk(12, page));

    axios.get(`https://kenziehub.me/users/${idLoged}`).then((res) => {
      console.log("DataHome: ", res.data);
      setInfoLoged(res.data);
    });
  }, [dispatch, page]);

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
          <div className="name">{<b>{infoLoged.name}</b>}</div>
        </Perfil>
        <TimeLine>
          <ListUserHome users={users} currentPage={page} setPage={setPage} />
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
  width: 210px;
  height: 100%;
  margin-bottom: 20px;

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
