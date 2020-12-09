import GlobalStyle from "./styles/global";
import RegistrationForm from "./components/userRegister";
import Home from "./pages/home";

//RegistrationForm inserida apenas para teste. Substituir alert por modal alert.

const App = () => {
  return (
    <>
      <div id="main-container">
        <h1>KenzieHub</h1>
        <Home />
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
