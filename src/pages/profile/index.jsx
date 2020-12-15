import React, { useState } from "react";
import ProfileUser from "../../components/perfilUser";
import NavBar from "../../components/navbar";

const Profile = () => {
  const storage = localStorage.getItem("idLoged");

  return (
    <>
      <NavBar />
      <ProfileUser id={storage} />
    </>
  );
};

export default Profile;
