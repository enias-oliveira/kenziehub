import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/navbar";
import CarouselSlider from "../../components/sliderCarousel";
import ListUserBasics from "../../components/listUserBasics";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

const LandingPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(16, 5));
  }, []);
  return (
    <>
      <NavBar />
      <CarouselSlider />
      <ListUserBasics users={users} />
    </>
  );
};

export default LandingPage;
