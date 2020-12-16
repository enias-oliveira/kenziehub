import React from "react";
import RegistrationForm from "../../components/userRegister";
import NavBar from "../../components/navbar";


import styled from "styled-components";

const Register = () => {
  return (
    <>
      <NavBar />

      <Container>
        
        <RegistrationForm />
      </Container>
    </>
  );
};

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
`;

export default Register;
