import React from "react";
import NavBar from "../../components/navbar";
import PerfilUser from "../../components/profileUser";

const ProfileUsers = () => {
  const storage = localStorage.getItem("idCommunity");
  return (
    <>
      <NavBar />
      <PerfilUser id={storage} userLoged={false} />
    </>
  );
};

export default ProfileUsers;
