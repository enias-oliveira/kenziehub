import React from "react";
import RegistrationForm from "../../components/userRegister";
import NavBar from "../../components/navbar";
import CarouselSlider from "../../components/sliderCarousel";

const Register = () => {
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <RegistrationForm />
    </>
  );
};

export default Register;
