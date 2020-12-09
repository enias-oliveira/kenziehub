// import ListUser from '../../components/listUser' // Reutilizar listagem na Home
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <TopBar>
        <Logo>Logo</Logo>
        <ContainerLinks>
          <Link className={"link"}>Dashboard</Link>
          <Link className={"link"}>Logout</Link>
        </ContainerLinks>
      </TopBar>

      <main>
        <Perfil>
          <div className="img">Foto</div>
          <div className="name">nome</div>
          <Link className="editar">editar perfil</Link>
        </Perfil>
        <TimeLine>
          {/* Onde receberia a listagem */}
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
          <div className="cards">
            Users: name <br /> Title: null <br /> Status: null
          </div>
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
    color: white;
    width: 200px;
    height: 200px;
    background: #323232;
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
