import ListUser from "../../components/listUser";
import { Route } from "react-router-dom";

const Initial = () => {
  return (
    <>
      <Route exact path="/users">
        <ListUser />
      </Route>
    </>
  );
};

export default Initial;
