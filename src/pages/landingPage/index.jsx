import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/navbar/navigation";
import NavBar from "../../components/navbar";
import CarouselSlider from "../../components/sliderCarousel";
import ListUserBasics from "../../components/listUserBasics";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

const LandingPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(15, 5));
  }, []);
  return (
    <>
      <Navigation />
      <CarouselSlider />
      <ListUserBasics users={users} />
    </>
  );
};

export default LandingPage;
