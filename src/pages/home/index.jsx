import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListUser from "../../components/listUser"; // Reutilizar listagem na Home
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar";
import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(16, 5));
  }, []);

  return (
    <Container>
      <NavBar />

      <main>
        <Perfil>
          <div className="img">
            <img
              src="https://raw.githubusercontent.com/hom-bahrani/react-profile-card/master/src/placeholder.png"
              alt="user"
            />
          </div>
          <div className="name">User da Silva</div>
          <Link className="editar">editar perfil</Link>
        </Perfil>
        <TimeLine>
          <ListUser users={users} />
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

  .cards {
    padding: 10px 20px;
    border: 1px solid black;
    margin: 10px;
  }
`;

const TopBar = styled.div`
  position: relative;
  padding: 30px;
  background: #915858;

  .link {
    margin: 0 10px;
    color: #323232;
  }
`;

const Logo = styled.div`
  position: absolute;
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;
