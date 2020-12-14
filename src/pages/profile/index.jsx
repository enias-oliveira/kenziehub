import ProfileUser from "../../components/perfilUser";

const Profile = () => {
  const storage = localStorage.getItem("idLoged");
  return <ProfileUser id={storage} />;
};

export default Profile;
