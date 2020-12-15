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
    <>
      <NavBar />
      <Container>
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
          <ListUserHome users={users} currentPage={page} setPage={setPage} />
        </main>
      </Container>
    </>
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

  @media only screen and (max-width: 768px) {
    main {
      flex-direction: column;
    }
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

  @media only screen and (max-width: 768px) {
    margin: auto;
    margin-top: 1rem;
    .img {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;
