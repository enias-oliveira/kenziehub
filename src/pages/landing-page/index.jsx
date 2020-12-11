import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { showUsersThunk } from "../../store/modules/usersBasics/thunks";

import ListUser from "../../components/listUser";

const LandingPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUsersThunk(16, 5));
  }, []);

  return (
    <>
      <ListUser users={users} basic />
    </>
  );
};

export default LandingPage;
