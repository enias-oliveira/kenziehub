import React from "react";
import RegistrationForm from "../../components/userRegister";
import NavBar from "../../components/navbar";
import CarouselSlider from "../../components/sliderCarousel";
import Navigation from "../../components/navbar/navigation";

import styled from "styled-components";

const Register = () => {
  return (
    <>
      <Navigation />
      <CarouselSlider />
      <Container>
        <RegistrationForm />
      </Container>
    </>
  );
};




export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
`;

export default Register;