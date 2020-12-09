import GlobalStyle from "./styles/global";
import RegistrationForm from "./components/userRegister";
import Login from "./pages/login";

//RegistrationForm inserida apenas para teste. Substituir alert por modal alert.

const App = () => {
  return (
    <>
      <div id="main-container">
        <h1>KenzieHub</h1>
        <RegistrationForm />
        <Login />
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
