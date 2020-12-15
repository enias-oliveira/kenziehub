import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";

import ListUserHome from "../../components/listUserHome";
import NavBar from "../../components/navbar";

import styled from "styled-components";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

import {Tooltip} from "antd"

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
  }, [dispatch, page, idLoged]);

  return (
    <>
      <NavBar />
      <Container>
        <main>
          <Tooltip placement="bottom" title="Clique para editar seu perfil e inserir um novo avatar">
            <Perfil>
              <Link to="/profile">
                <div className="img">
                  <img
                    src={
                      infoLoged.avatar_url
                        ? infoLoged.avatar_url
                        : "https://i.postimg.cc/dV5zS0bc/avatar-default.png"
                    }
                    alt="user"
                  />
                </div>
              </Link>
              <div className="name">
                {
                  <b>
                    <h4>{infoLoged.name}</h4>
                  </b>
                }
              </div>
            </Perfil>
          </Tooltip>
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
