import GlobalStyle from "./styles/global";
import RegistrationForm from "./components/userRegister";

//RegistrationForm inserida apenas para teste. Substituir alert por modal alert.

const App = () => {
  return (
    <>
      <div id="main-container">
        <h1>KenzieHub</h1>
        <RegistrationForm />
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
